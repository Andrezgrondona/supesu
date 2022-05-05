import React from "react"


export default function ItemCount (){
  const [count, setCount] = React.useState(0)

    const handleRest = () => {
        if (count > 0){
            setCount (count -1)
        }
    }

    return(
        <div>
           <input type="button"  value="+" onClick ={()=> setCount(count +1)} /> 
           {count}
           <input type="button"  value="-" onClick ={handleRest} /> 
        </div>
    );
}

