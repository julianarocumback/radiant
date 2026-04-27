export default function Option({setOrdem, ordemAtiva}) {
    return (
        <select className='text-right' onChange={(e) => setOrdem(e.target.value)} value={ordemAtiva} className="bg-transparent focus:ring-0 b b py-1 focus:outline-none cursor-pointer" >
            <option value="padrao">Lançamentos</option>
            <option value="menor-valor">Menor Preço</option>
            <option value="maior-valor">Maior Preço</option>
        </select>
    )
}