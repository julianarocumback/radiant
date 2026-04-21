export default function Option({setOrdem, ordemAtiva}) {
    return (
        <select onChange={(e) => setOrdem(e.target.value)} value={ordemAtiva} className="bg-transparent border-b border-black py-1 focus:outline-none cursor-pointer" >
            <option value="padrao">Todos</option>
            <option value="menor-valor">Menor Preço</option>
            <option value="maior-valor">Maior Preço</option>
        </select>
    )
}