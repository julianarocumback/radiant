export default function Title({produto}) {
    return (
        <div>
            <h1 className=" text-3xl lg:text-6xl font-bold">{produto?.nome}</h1>
        </div>
    )
}