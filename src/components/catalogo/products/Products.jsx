export default function Products({produtos, carregando}){

    const listaNova = produtos.map(produto => {
        return(
            <div className="flex flex-col gap-4" key={produto.id}>
                <div className="border h-100 rounded-2xl overflow-hidden">
                    <img src={produto.img_url} alt="" />
                </div>
                <div>
                    <p>{produto.nome}</p>
                    <p>{produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <p>{produto.livros.autor}</p>
                    <p>{produto.livros.isbn}</p>
                </div>  
            </div>
        )
    })
    if (carregando) return <p>Carregando livros...</p>;
    return (
        
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        {/* produtos */}
        {listaNova}
    </div>
    )
}