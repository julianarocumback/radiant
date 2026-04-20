import Filter from "./filter/Filter"
import Products from "./products/Products"
export default function Catalogo(){
    return(
        <section className="border flex gap-6 px-80 py-40">
            <Filter/>
            <Products/>
        </section>
    )
}