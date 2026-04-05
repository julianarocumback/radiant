import Logo from "./logo/Logo"
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"

export default function Header() {
    return(
        <header>
            <Logo/>
            <Login/>
            <Carrinho/>
        </header>
    )
}