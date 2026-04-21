export default function Filter({filtros, setFiltros}){

    const handleCheckBox = (categoria, valor) => {
    // Usamos 'prev' para garantir que pegamos o estado EXATO do momento do clique
    setFiltros(prev => {
        const listaAtual = prev[categoria];
        
        const novaLista = listaAtual.includes(valor)
            ? listaAtual.filter(item => item !== valor) // Remove
            : [...listaAtual, valor];                   // Adiciona

        return {
            ...prev,
            [categoria]: novaLista
        };
    });
};

    return (
        <div className="border w-80 h-full">
            <div>
                <br />
                <div className="flex flex-col ">
                    <span className="font-bold">Autores</span>
                    <div>
                        <div>

                    <input 
    type="checkbox" 
    id="teste" 
    // O 'checked' é o que mantém a caixinha visualmente marcada
    checked={filtros.autores.includes('Luciano Subira')} 
    onChange={() => handleCheckBox('autores', 'Luciano Subira')} 
/>
                        <label htmlFor="teste"> Luciano Subira</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}