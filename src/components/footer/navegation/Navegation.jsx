import { Link } from "react-router-dom"

export default function Navegation() {
    return (
        <nav>
            <ul>
                <Link to='#'>Livros</Link>
                <Link to='#'>Devocionais</Link>
                <Link to='#'>Teologia</Link>
                <Link to='#'>Infantil</Link>
            </ul>
        </nav>
    )
}