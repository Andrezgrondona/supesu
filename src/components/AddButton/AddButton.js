import React from "react"


export default function AddButton (){
    const [count, setCount] = React.useState(1)
    const stock = 5

    const onAdd = () => {
        if(count<stock){
        setCount(count +1)
     }
    }

    const handleRest = () => {
        if (count > 0){
            setCount (count -1)
        }
    }

    const StockButton = ({handleOnclick, text})=>{
        return(
         <button className="stock-button" onClick={handleOnclick}>{text} </button>)
        }

        const AddButton = () => {
            return (
                <button className="add-button">
                    Añadir al carrrito
                </button>
            )
        }


    return(
        <div className="add-button-container">
            <StockButton text="+" handleOnclick={onAdd}/>
            <span className="add-button-count">{count}</span>
            <StockButton text="-" handleOnclick={handleRest}/>
            <StockButton text="Añadir al carrito" handleOnclick={AddButton}/>
        </div>
    )

}
