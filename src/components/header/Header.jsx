import Logo from "./logo/Logo"
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"
import Menu from "./menu/Menu"


export default function Header() {
    return(
        <header className="flex h-10 w-all bg-[grey] justify-between px-5 items-center">
            <Menu/>
            <Logo/>
            <Login/>
            <Carrinho/>
        </header>
    )
}