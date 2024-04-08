import { useState } from "react"

const FoodBox = (props)=> {
// console.log('props :', props);

    let {data, index} = props
    let {cal, id, img, name} = data

    const [input,setInput] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const quantityHandler=()=>{
        setQuantity(input)
    }

    return(
        <div className="foodbox-main" key={index}>
            {/* <h2>Foods</h2> */}
            
            <div className="foodbox-main-left">
                <img src={img} alt="" />
                <div className="foodbox-main-left-1">
                    <h1>{name}</h1>
                    <h2>{cal}</h2>
                </div>
                <div className="foodbox-main-left-2">
                    <input type="number" min={0} onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <button className="add" onClick={quantityHandler}>+</button>
                </div>
            </div>
            <div className="foodbox-main-right">
                <h4>{name} X {quantity} = {cal * quantity} Calories</h4>
                <button className="reset"  onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>Reset</button>
            </div>
        </div>
    )
}

export default FoodBox;