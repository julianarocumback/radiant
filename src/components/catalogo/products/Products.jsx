import Order from "./order/Order"
export default function Products(){
    const lista = [
        {
            titulo: 'teste',
            autor: '',
            valor: '123',
            freteGratis: false,
            categoria: '',
            desconto: false
        },
        {
            titulo: 'teste2',
            autor: '',
            valor: '123',
            freteGratis: false,
            categoria: '',
            desconto: false
        },
        {
            titulo: 'teste2',
            autor: '',
            valor: '123',
            freteGratis: false,
            categoria: '',
            desconto: false
        },
        {
            titulo: 'teste2',
            autor: '',
            valor: '123',
            freteGratis: false,
            categoria: '',
            desconto: false
        },
        {
            titulo: 'teste2',
            autor: '',
            valor: '123',
            freteGratis: false,
            categoria: '',
            desconto: false
        },

    ]
    const listaNova = lista.map(produto => {
        return(
            <div className="flex flex-col gap-4">
                <div className="border h-100 rounded-2xl">
                    <img src="" alt="" />
                </div>
                <div>
                    <p>{produto.titulo}</p>
                    <p>{produto.valor}</p>
                </div>  
            </div>
        )
    })
    return(
        <div className="border w-full flex flex-col p-10 gap-4">
            <div className="flex justify-between">
                {/* Colocar quantidade pelo banco */}
                <span>Exibindo 'X' resultados</span>
                <Order/>
            </div>
            <div className="h-[0.1px] w-full bg-black"></div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
                {/* produtos */}
                {listaNova}
            </div>
        </div>
    )
}