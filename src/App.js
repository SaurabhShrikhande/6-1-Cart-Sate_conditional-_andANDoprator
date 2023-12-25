// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { useState } from "react";


function App() {
     const [globalval, setglobval] = useState(4);
     const [total , settotal] = useState(2199.96);
     const [clear , setclear] = useState(true);


     let glob = (type , cost) => {
         if(type === "inc"){
          setglobval(globalval + 1);
          settotal(total + cost);

         // console.log(globalval);
         }
        else if(type === "dec"){
           setglobval(globalval - 1);
           settotal(total - cost);
        }
     }
  

  return (<div>  

       <nav style={{display:"flex", justifyContent:"space-around", backgroundColor:"#645cff", color:"white", padding:"15px 0", marginTop:"10px"}}>
        <h1 style={{margin:"0"}}>UseReducer</h1>
        <div style={{display:"flex"}}>
        <svg color='white' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="cart-icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
        <h4 style={{margin:"0", backgroundColor:"#a29dff", height:"25px",padding:"0px 4px", borderRadius:"50%", transform:"translate(-50%, -50%)"}}>{globalval}</h4>
        </div>
       </nav>

<div style={{display:"flex", flexDirection:"column", maxWidth:"800px", margin:"auto"}}>

  <h1 style={{textAlign:"center"}}>YOUR BAG</h1> 


  <div> 
    {
      clear &&  ( <div> 
       
     <Main img="https://www.course-api.com/images/cart/phone-1.png"
    name = "Samsung Galaxy S8"
    price = {399.99}
    glob = {glob}
    />
    
    <Main img = "https://www.course-api.com/images/cart/phone-2.png"
    name = "Google Pixel"
    price = {499.99}
    glob = {glob}
    />

    <Main img = "https://www.course-api.com/images/cart/phone-3.png"
    name = "Xiaomi Redmi Note 2"
    price = {699.99}
    glob = {glob}
    />

<Main img = "https://www.course-api.com/images/cart/phone-4.png"
    name = "Samsung Galaxy S7"
    price = {599.99}
    glob = {glob}
    />
    
    <div style={{ borderTop: "2px solid black ", margin:"25px 0px"}}></div>

    <div style={{display:"flex", justifyContent:"space-between", margin:"0px 25px"}}>
      <p style={{padding:"10px 20px" , fontSize:"20px"}}>Total</p>
      <p style={{backgroundColor:"#a29dff", padding:"10px 20px", fontSize:"20px", borderRadius:"10px"}}>$ {total}</p>
    </div>
       
      <button style={{width:"200px", fontSize:"25px", marginTop:"20px", borderRadius:"10px", marginInline:"auto", display:"flex", justifyContent:"center"}}
       onClick = {() => setclear(false)}
      >Clear Cart</button> 
   
    </div> )
        }
  </div>
   
    {/* both work    
   <div>
    {clear === false && (  //without bracket also work
    <h1 style={{textAlign:"center"}}>is currently empty</h1> 
      )}
   </div> */}

   <div>
    {clear === false? 
    <h1 style={{textAlign:"center"}}>is currently empty</h1> : ""
      }
   </div>
    

 </div>


</div>
        
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
