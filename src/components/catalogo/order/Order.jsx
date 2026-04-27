import Option from "./option/Option"

export default function Order({quantidade, setOrdem, ordemAtiva}){
return(
    <div className="flex justify-between items-center">
        <span>Exibindo {quantidade} resultados</span>
        <div className="flex gap-2 items-center">
            <span>ORDENAR POR</span>
            <Option setOrdem={setOrdem} ordemAtiva={ordemAtiva}/>
        </div>
    </div>
)

}