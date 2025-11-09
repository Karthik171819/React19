import "../../App.css"
export default function JSXExample() {
    //embedded expersion
    const name = "karthik";
    return <>
    <h1 className="bg-color" style={{ border:'1px solid black'}}>This is JSX EXAMPLE {name} </h1>
    <p style={{backgroundColor:'yellow', border:'1px solid black'}}>Hi im paragragh</p>
    </>
}