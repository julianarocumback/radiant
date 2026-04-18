import Email from "./email/Email"
import Button from "../hero/button/Button"

export default function NewsLetter(){
    return (
        <div className="w-full h-100 flex justify-center py-20">
            <div className="w-[70%] border border-[rgba(198,198,198,0.20)] bg-[#f3f3f5] shadow-lg rounded-4xl flex flex-col px-70 text-center justify-center gap-4">
               
                    <h2 className="text-3xl">Receba Gotas de Inspiração</h2>
                    <p>Inscreva-se para receber lançamentos exclusivos, reflexões semanais <br/> e descontos especiais em sua caixa de entrada.</p>
                    <div className="flex gap-4 justify-center">
                        <Email/>
                        <Button texto='Inscrever' style=' py-4 px-6 rounded-4xl w-30 font-medium bg-[#00639a] text-white' onClick=''/>
                    </div>


               
            </div>
        </div>
    )
}