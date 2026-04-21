import Option from "./option/Option"

export default function Order(){
return(
    <div className="flex justify-between">
        <span>Exibindo 'X' resultados</span>
        <div className="flex gap-2 ">
            <span>ORDENAR POR</span>
            <Option/>
        </div>
    </div>
)

}