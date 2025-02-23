import CategoryCard from "./CategoryCard";

export default function Categories() {
    return (<div className="flex w-full h-fit justify-between mt-8">
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Celulares"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Cosméticos"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Eletrônicos"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Móveis"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Relógios"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Decorações"} />
        <CategoryCard imageSrc={"/s22ultra.svg"} title={"Acessórios"} />
    </div>)
}