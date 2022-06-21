import React from "react"

import { Button } from "react-bootstrap"


export default function AddButton({count, setCount, stock, onSubmit}) {
  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  
  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="stock-button" onClick={() => handleOnClick()}>{text}</Button>;
  };
 
  const AddButton = ({handleOnSubmit}) => {
    return <Button className="btn add-button" onClick={() => handleOnSubmit()}>Añadir al carrito</Button>;
  };

  return (
    <div className="add-button-container">
      <StockButton text="+" handleOnClick={onAdd}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="-" handleOnClick={onDecrease}/>
      <AddButton handleOnSubmit={onSubmit} />
    </div>
  );
}


