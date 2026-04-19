import Email from "./email/Email"
import Button from "../hero/button/Button"

export default function NewsLetter(){
    return (
        <div className="w-full lg:h-120 flex justify-center lg:py-20">
            <div className="lg:w-[70%] w-full border border-[rgba(198,198,198,0.20)] bg-[#f3f3f5] shadow-lg lg:rounded-4xl flex flex-col lg:px-70 text-center justify-center py-12 gap-3 lg:gap-5">
               
               
                    <h2 className="text-xl lg:text-3xl">Receba Gotas de Inspiração</h2>
                    <p className="text-sm lg:text-base">Inscreva-se para receber lançamentos <br/> exclusivos, reflexões semanais e descontos <br/> especiais em sua caixa de entrada.</p>

                    <div className="flex flex-col lg:flex-row py-2 px-20 lg:px-40 gap-4 justify-center items-center ">
                        <Email/>
                        <Button texto='Inscrever' style=' py-4 px-6 rounded-4xl w-full lg:w-30 font-medium bg-[#00639a] text-white cursor-pointer' onClick=''/>
                    </div>


               
            </div>
        </div>
    )
}