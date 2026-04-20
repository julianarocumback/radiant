import { useState, useEffect } from "react"
import { Carrossel, BentoGrid } from "./exploreCotent/ExploreContent"

export default function Explorar(){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
        const checkSize = ()=>{
            setIsMobile(window.innerWidth < 1200)
        }
        checkSize()

        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)

    },[])
    return (
        <section className="w-full py-24 px-86">
            {isMobile? (<Carrossel/>): (<BentoGrid/>)}
        </section>
    )
}