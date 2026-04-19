import Logo from "./logo/Logo"
import Login from "./login/Login"
import Carrinho from "./carrinho/Carrinho"
import Menu from "./menu/Menu"


export default function Header() {
    return(
        <header className="flex h-14 w-all bg-white/80 justify-between px-5 items-center lg:px-8">
            <Menu/>
            <Logo/>
            <div className="flex gap-4">
                <Login/>
                <Carrinho/>

            </div>
        </header>
    )
}