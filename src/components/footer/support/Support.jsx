import { Link } from "react-router-dom"

export default function Support() {
    return (
        <nav>
            <ul>
                <Link to='#'>FAQ</Link>
                <Link to='#'>Envio e Entrega</Link>
                <Link to='#'>Trocas e Devoluções</Link>
                <Link to='#'>Privacidade</Link>
            </ul>
        </nav>
    )
}