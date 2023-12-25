import { useState } from "react";

function Main(props){
    const [val, setval] = useState(1);
    const [del , setdel] = useState(true);

    function plus(){
         setval(parseInt(val) + 1);
      //   settot(props.price);
          props.glob("inc", props.price);
     }
     function minus(){
        if(val > 1){
        setval(parseInt(val) - 1);
          props.glob("dec", props.price);
        }
        else if(val === 1){
               setdel(false);
               props.glob("dec", props.price);
        }
    }


    return(
            <div>
          { del && ( 
          <div  style={{display:"flex", justifyContent:"space-between" , backgroundColor:"#f7f7f7", margin:"10px", borderRadius:"20px"}}>
        <div style={{display:"flex", gap:"25px" }}>
            <div>
                <img style={{paddingTop:"20px"}} width={90} src= {props.img} alt="" />
            </div>
            <div style={{lineHeight:"10px", paddingTop:"10px"}}>
                <h3>{props.name}</h3>
                <p>$ {props.price}</p>
                <p>remove</p>
            </div>
        </div>
         <div style={{lineHeight:"5px", padding:"10px", marginLeft:"50px" }}>
            <h3 style={{color:"#0000ff", fontWeight:"900" }} 
            onClick ={plus}>^</h3>
            <h2>{val}</h2>
            <h3 style={{ marginRight:"25px", rotate:"180deg", color:"#0000ff"}}
            onClick={minus}
            >^</h3>
         </div>
    </div>
     )}
    </div>
)
}


export default Main;