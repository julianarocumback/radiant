import { useState, useEffect } from "react"
import { Carrossel, BentoGrid } from "./content/Content"


export default function Testemunhos(){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{
        const checkSize = ()=>{
            setIsMobile(window.innerWidth < 1200)
        }
        checkSize()
        
            window.addEventListener('resize', checkSize)
        
            return ()=> window.removeEventListener('resize', checkSize)
    },[])


    return (
        <section>
            {isMobile? (<Carrossel/>):(<BentoGrid/>)}     
        </section>
    )
}