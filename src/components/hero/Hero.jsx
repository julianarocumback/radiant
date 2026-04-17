import Badge from "./badge/Badge"
import Button from "./button/Button"
import HeroContent from "./heroContent/HeroCotent"
import HeroFeature from "./heroFeature/HeroFeature"

export default function Hero() {
    return (
        <div className='h-screen w-full bg-blue-200 flex flex-col px-10 justify-center' >
            <div className='hidden md:block'>
                <Badge/>
            </div>

            <div className='order-1 md:order-0 flex flex-col my-1'>
                <HeroContent/>
                <div className='flex justify-center my-4'>
                    <Button style={'bg-red-100 h-15 rounded-xl px-4'} texto={'Explorar Coleção'}><i class="fa-solid fa-star"></i></Button>
                </div>
            </div>
            
            <span class="material-icons-outlined"></span>
            <div>
                <HeroFeature/>
            </div>
        </div>
    )

}