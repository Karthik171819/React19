import { useCallback, useEffect, useState } from "react"


export default function UseCallback() {

    const [productId, setProductId] = useState(1);
    const [price, setPrice] = useState(100);
    const [discountPrice, setDiscountPrice] = useState(100);
    const [note, setNote] = useState("");

    //useEffect 
    useEffect(() => {
        const basePrices = {
            1:100,
            2:200,
            3:300
        }
        setPrice(basePrices[productId])
    }, [productId])

    //discount price using callBack
    const calculateDiscount = useCallback(() => {
        console.log("Calucating discount");
        let discount = 0;
        if(productId === 1){
            discount = 0.1;
        }
        else if(productId === 2){
            discount = 0.15;
        }
        else if(productId === 3){
            discount = 0.2;
        }

        setDiscountPrice(price - (price * discount));
    },[productId])
    //calling calc discount function throufgh use effect

    useEffect(() => {
        calculateDiscount();
    }, [calculateDiscount])



    return<div>
        <h1>UseCallback Example</h1>
        <h2>Product ID: {productId}</h2>
        <h2>Original Price:${price}</h2>
        <h2>Discount Price:${discountPrice}</h2>

    <div >
        <button className="button" onClick={() => {setProductId(1)}}>Product1</button>
        <button className="button" onClick={() => {setProductId(2)}}>Product2</button>
        <button className="button" onClick={() => {setProductId(3)}}>Prouduct3</button>
    </div>
        

        <div style={{marginTop:""}}>
            <h4>NOTE (wont trigger discount calculation)</h4>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value) }
                placeholder="Type your note here"/>
                <p>Current Note:{note}</p>
        </div>
        
    </div>
}