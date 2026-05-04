import Comment from "./comment/Comment"
import Resume from "./resume/Resume"
import Title from "./title/Title"

export default function Comments(){
    return (
        <div className="bg-[rgba(249,249,251,1)] px-90 h-screen w-full relative flex flex-col justify-center">
            <Title/>
            <div className="flex gap-8">
                <Resume/>
                <Comment/>
            </div>
        </div>
    )
}