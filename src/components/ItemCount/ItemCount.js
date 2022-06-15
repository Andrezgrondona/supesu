import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



export default function ItemCount({ stock, initial,  onAdd }){
    const [count, setCount] = useState(+initial);

    useEffect( () => {
        setCount(count);
    },[count])

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1);
            onAdd(count);
        }
    };
    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
            }
    }

    
    return(
        <div>                    
            <Container>

                                <Row>
                                    <Col><button onClick={decreaseCount}> - </button></Col>
                                    <Col>{count}</Col>
                                    <Col><button onClick={addCount}> + </button></Col>
                                </Row>                                
        
                </Container>
        </div>
        

    )
}




/* import React, { useState } from "react";

const ItemCount =({stock}) => {
    const [counter, setCounter] = useState(1)
    const sumar =() =>{
        if(counter < stock){
            setCounter(counter +1)
        }
    }

    const restar =() => {
        if(counter >1 ){
            setCounter(counter -1)
        }
    }

    return(
        <div>
            <button onClick={sumar}>+</button>
            <span>{counter}</span>
            <button onClick={restar}>-</button>
        </div>
    )

}

export default ItemCount */