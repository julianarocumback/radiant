import Email from "./email/Email"
import Button from "../hero/button/Button"

export default function NewsLetter(){
    return (
        <div>
            <h2>Receba Gotas de Inspiração</h2>
            <p>Inscreva-se para receber lançamentos exclusivos, reflexões semanais e descontos especiais em sua caixa de entrada.</p>
            <Email/>
            <Button texto='Enviar' onClick=''/>
        </div>
    )
}