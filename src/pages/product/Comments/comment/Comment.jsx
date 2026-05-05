import Card from "./card/Card"


export default function Comment(){
    return (
        <div className="flex-1 h-full overflow-y-auto relative text-sm">
            <div className="flex gap-4 flex-col">
                <Card/>
                <Card/>
            </div>
        </div>
    )
}