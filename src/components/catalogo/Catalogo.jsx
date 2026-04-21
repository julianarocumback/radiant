import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import Order from "./order/Order"
import Filter from "./filter/Filter"
import Products from "./products/Products"

export default function Catalogo(){

    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const [filtros, setFiltros] = useState({
        tudo: 'todos',
        autores: [],
        capas: []
    })

    const [ordem, setOrdem] = useState('padrao')

    useEffect(()=> {
        async function getProdutos() {
            try {
                setCarregando(true)
                await new Promise(resolve => setTimeout(resolve, 2000));
                const {data, error} = await supabase
                .from('produtos')
                .select('id,nome,ano,valor,img_url,livros(autor,tipo_capa,tipo_folha,quantidade_paginas,isbn)')
                if (error) throw error
                setProdutos(data)
            } catch (error) {
                console.error('Erro ao buscar livros:', error.message)
            } finally {
                setCarregando(false)
            }
        }
        getProdutos()
    },[])


    const lista = produtos
    .filter(item => {
        // Se a lista de autores selecionados estiver vazia, passa todo mundo (true)
        // Se não estiver vazia, o autor do livro (item.livros.autor) precisa estar incluído nela
        const passaAutor = filtros.autores.length === 0 || filtros.autores.includes(item.livros?.autor);
        
        // Se você tiver filtros de capa, adiciona aqui também:
        // const passaCapa = filtros.capas.length === 0 || filtros.capas.includes(item.livros?.tipo_capa);

        return passaAutor; // && passaCapa (se tiver mais de um)
    })
    .toSorted((a,b) => {
        const valorA = Number(a.valor)
        const valorB = Number(b.valor)
        if (ordem === 'menor-valor') return valorA - valorB
        if (ordem === 'maior-valor') return valorB - valorA
        return a.nome.localeCompare(b.nome)
    })

    return (
        <section className="">
            <div className="border border-blue-500 flex gap-6 px-80 py-30 w-full">
                <div className="hidden lg:block">
                    <Filter setFiltros={setFiltros} filtros={filtros} />
                </div>
                <div className="flex border flex-col gap-6 p-6 w-full">
                    <Order setOrdem={setOrdem} ordemAtiva={ordem} quantidade={lista.length}/>
                    <div className="h-[0.1px] w-full bg-black"></div>
                    <Products produtos={lista} carregar={carregando}/>
                </div>
            </div>
        </section>
    )
}