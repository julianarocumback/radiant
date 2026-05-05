export default function Card(){
    return (
        <div className="border border-gray-200 shadow-sm rounded-2xl bg-white p-8 w-full flex flex-col gap-7">

                <div className="flex gap-4">
                    <div className="bg-[rgba(0,99,154,0.1)] h-12 w-12 rounded-full flex justify-around items-center font-bold">MD</div>
                
                
                <div className="">
                    <h4 className="text-xl font-semibold">Maria D.</h4>
                    <div className="lg:flex-row gap-2 items-center flex-col">
                        <div className="flex gap-2 font-semibold text-sm text-[rgb(188,0,75)]">
                            <div><i class="fa-regular fa-circle-check"></i></div>
                            <div>Compra verificada</div>
                        </div>
                        <div className="text-[rgb(71,71,71)] flex gap-2">
                            <div>•</div>
                            <div>15 de Outubro, 2023</div>
                        </div>
                    </div>
                
                </div>
                </div>

                <div className="text-base lg:text-lg text-[rgb(71,71,71)]">
                                "A beleza desta bíblia é inspiradora. A clareza das notas de estudo transformou minha devoção diária. Um verdadeiro tesouro espiritual. O couro tem um toque incrível e as páginas são perfeitas."
                            </div>

                <div className="h-0.5 bg-gray-200 w-full"></div>

                <div className="flex gap-8 items-center">
                    <span className="text-[rgb(71,71,71)] lg:inline  hidden">Esta avaliação foi útil?</span>
                    <div className="flex gap-4">
                        <button className="flex gap-2 bg-gray-200 rounded-3xl py-2 items-center text-[rgb(71,71,71)] px-4">
                            <div>
                                <i class="fa-regular fa-thumbs-up"></i>
                            </div>
                            <div>Útil (24)</div>
                        </button>
                        <button className="flex gap-2 bg-gray-200 rounded-3xl py-2 items-center text-[rgb(71,71,71)] px-4">
                            <div>
                            <i class="fa-regular fa-thumbs-down"></i>
                            </div>
                            <div>Não útil (2)</div>
                        </button>
                    </div>

                </div>

                <div className="absolute right-5">
                    <div className="text-[rgb(112,93,0)] flex gap-2"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                </div>


            </div>
    )
}