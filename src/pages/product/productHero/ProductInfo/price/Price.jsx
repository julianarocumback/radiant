export default function Price({produto}){
    return (
        <div>
            <span className="text-3xl">{produto?.valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</span>
        </div>
    )
}