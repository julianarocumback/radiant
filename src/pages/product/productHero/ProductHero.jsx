import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo/ProductInfo"

export default function ProductHero({foto, gallery , setIdFoto, produto}){
    return(
        <div className="w-full h-full flex flex-col lg:flex-row gap-30 lg:gap-30 ">
            <ProductGallery foto={foto} gallery={gallery} setIdFoto={setIdFoto}/>
            <ProductInfo produto={produto}/>
        </div>
    )
}