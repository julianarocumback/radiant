export default function Card(){

    const card = [
        {
            capa: 'teste',
            titulo: 'Tons de Azul',
            subtitulo: 'Bíblias de estudo'
        },
        {
            capa: 'teste',
            titulo: 'Tons de Rosa',
            subtitulo: 'Bíblias de estudo'
        },
        {
            capa: 'teste',
            titulo: 'Tons de Amarelo',
            subtitulo: 'Bíblias de estudo'
        },
        {
            capa: 'teste',
            titulo: 'Tons de Verde',
            subtitulo: 'Bíblias de estudo'
        },
    ]

    const cards = card.map(card => {
        return(
            <div className="h-30 w-70 bg-blue-300">
                {card.titulo} {card.subtitulo}            
            </div>
        )
    })

    return (
        <div className="flex gap-4 ">{cards}</div>
    )
}