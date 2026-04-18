import Feature from './feature.png'
export default function HeroFeature(){
    return (
        <div className=''>
            <div className='h-70 w-50 shadow-[inset_0_0_0_8px_rgba(255,255,255,0.3)] rounded-2xl p-2 ' >
                <div className='h-full w-full rounded-xl'>
                    <img src={Feature} alt="" />
                </div>
            </div>
        </div>
    )
}