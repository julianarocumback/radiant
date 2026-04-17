import Card from "./Card/Card"
import ExploreContent from "./exploreCotent/ExploreContent"
import Carrossel from "./carrossel/Carrossel"

export default function Explorar(){
    return (
        <div className="h-70 w-full bg-amber-300">
            <ExploreContent/>
            <Carrossel/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}