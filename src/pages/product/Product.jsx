import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../../supabaseClient"

import Header from "../../components/header/Header"
import ProductHero from "./productHero/ProductHero"
import ProductDetails from "./productDetails/ProductDetails"
import Comments from "./Comments/Comments"

export default function Product(){

    const {id} =  useParams()
    const [produto, setProduto] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const [idFoto, setIdFoto] = useState('0')

    useEffect(() => {
        async function getProdutos() {
            try {
                setCarregando(true)
                const {data, error} = await supabase
                .from('produtos')
                .select('*')
                .eq('id', id)
                .single()
                if (error) throw error
                setProduto(data)
            } catch(error){
                console.error('Erro ao buscar produtos:', error.message)
            } finally {
                setCarregando(false)
            }
        }
        getProdutos()
    },[id])

    const foto = produto?.galeria_url.find(item => item.id === idFoto)
    const gallery = produto?.galeria_url.map(item => item)
    if(!produto){
        return
    }
    
    return(
    <div className="h-screen w-full bg-[rgba(249,249,251,1)] relative">
            <Header/>
            <main className="px-4 lg:px-90 py-20">
                <ProductHero foto={foto} gallery={gallery} setIdFoto={setIdFoto} produto={produto}/>
                        
            </main>
            <ProductDetails produto={produto}/>
            <Comments/>
    </div>
)
}