function NutritionDisplay({label, quantity, unit}) {
    return (
        <div>
            <p className="resultPar"><span>{label}</span> - {quantity.toFixed(3)} - {unit}</p>
        </div>
    )
}

export default NutritionDisplay;