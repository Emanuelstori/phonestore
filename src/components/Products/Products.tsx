import ProductCard from "@/components/Products/ProductCard";

export default function Products() {
    return (
        <div className="flex w-full h-fit mt-8 justify-between">
            <ProductCard
                imageSrc="/s22ultra.svg"
                title="Galaxy S22 Ultra"
                price={1000}
                discount="50"
            />
            <ProductCard
                imageSrc="/m13.svg"
                title="Galaxy M13 (4GB | 64 GB )aaaaaaaaaaaa"
                price={500}
                discount="50"
            />
            <ProductCard
                imageSrc="/s22ultra.svg"
                title="Galaxy S22 Ultra"
                price={1000}
                discount="50"
            />
            <ProductCard
                imageSrc="/m13.svg"
                title="Galaxy M13 (4GB | 64 GB )"
                price={500}
                discount="50"
            />
            <ProductCard
                imageSrc="/s22ultra.svg"
                title="Galaxy S22 Ultra"
                price={1000}
                discount="50"
            />
        </div>
    )
}