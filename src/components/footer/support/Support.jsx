import { Link } from "react-router-dom"

export default function Support() {
    return (
        
        <nav className="flex flex-col p-12 gap-6">
            <h4 className="text-xs font-medium text-[#1A1C1D]">SUPORTE</h4>
            <ul className="flex flex-col gap-3 text-[#64748B]">
                <Link to='#'>FAQ</Link>
                <Link to='#'>Envio e Entrega</Link>
                <Link to='#'>Trocas e Devoluções</Link>
                <Link to='#'>Privacidade</Link>
            </ul>
        </nav>
    )
}