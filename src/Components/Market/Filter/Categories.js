import Filter from "./Filter";

function Categories() {

    return (
        <div>
            <div className="CategoriesHeader"> 
                <h2>Choose what you need!</h2>
            </div>
            <div className="CategoriesParContainer">
                {
                    ["NUTRITION", "RECOVERING", "DETOX", "EQUIPMENT", "ALL"].map(category => <Filter category={category} />)
                }
            </div>
        </div>
    )
}

export default Categories;