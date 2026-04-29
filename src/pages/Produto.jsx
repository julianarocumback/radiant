import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

export default function Product(){

    const {id} =  useParams()
    const [produto, setProduto] = useState([])
    const [carregando, setCarregando] = useState(false)

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

    return(
    <div>
        <div>nome do livro</div>
        <p>valor</p>
        <p>{produto?.nome}</p>
        <p>{produto?.valor}</p>
    </div>
)
}