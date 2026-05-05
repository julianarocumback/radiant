export default function Photo({foto}) {
    return (
        <div className="lg:h-150 w-full border border-gray-200">
            <img className="object-cover h-full w-full" src={foto?.url} alt="" />
        </div>
    )
}