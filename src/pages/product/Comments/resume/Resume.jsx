export default function Resume(){
    return (
        <div className="border rounded-2xl shadow-sm border-gray-100 bg-white w-80 p-8 gap-8 flex flex-col">
            <h3 className="text-2xl font-bold">Resumo das Avaliações</h3>
            
            <div className="flex gap-8 items-center">
                <div className="text-5xl font-bold">4.9</div>
                <div>
                    <div className="text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <div>Baseado em 128 avaliações</div>
                </div>
            </div>

            <div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>5</div>
                        <div className="text-[12px] text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i></div>
                        <div>uma barra</div>
                        <div className="text-right">115</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>4</div>
                        <div className="text-[12px] text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i></div>
                        <div>uma barra</div>
                        <div className="text-right">10</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>3</div>
                        <div className="text-[12px] text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i></div>
                        <div>uma barra</div>
                        <div className="text-right">2</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>2</div>
                        <div className="text-[12px] text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i></div>
                        <div>uma barra</div>
                        <div className="text-right">0</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <div>1</div>
                        <div className="text-[12px] text-[rgb(112,93,0)]"><i class="fa-solid fa-star"></i></div>
                        <div>uma barra</div>
                        <div className="text-right">1</div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4  p-3 items-center rounded-2xl text-[rgb(0,99,154)] bg-[rgba(206,229,255,0.2)]">
                <div><i class="fa-solid fa-thumbs-up"></i></div>
                <div className="font-bold text-sm ">98% dos compradores recomendam este produto</div>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Destaques Principais</h4>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <div className="text-[rgb(188,0,75)]"><i class="fa-regular fa-circle-check"></i></div>
                        <div className="text-[rgb(71, 71, 71)]">Couro de alta qualidade</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="text-[rgb(188,0,75)]"><i class="fa-regular fa-circle-check"></i></div>
                        <div className="text-[rgb(71, 71, 71)]">Papel excelente para anotações</div>
                    </div>
                    <div className="flex gap-2">
                        <div className="text-[rgb(188,0,75)]"><i class="fa-regular fa-circle-check"></i></div>
                        <div className="text-[rgb(71, 71, 71)]">Conteúdo teológico profundo</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}