import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"
import Order from "./order/Order"
import Filter from "./filter/Filter"
import Products from "./products/Products"

export default function Catalogo(){

    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(()=> {
        async function getProdutos() {
            try {
                setCarregando(true)
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

    return (
        <section className="">
            <div className="border border-blue-500 flex gap-6 px-80 py-30">
                <div>
                    <Filter/>
                </div>
                <div className="flex border flex-col gap-6 p-6">
                    <Order/>
                    <div className="h-[0.1px] w-full bg-black"></div>
                    <Products produtos={produtos} carregar={carregando}/>
                </div>
            </div>
        


        

        </section>
    )
}