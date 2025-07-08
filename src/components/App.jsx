import Sidebar from "./Sidebar"
import Banner from "./banner"
import Body from "./body"
import ViewUs from "./whatdowedo"
import Choose from "./whychooseus"
import Distibutor from "./distributor"
import Product from "./ProductView"
import { PhoneDataFile } from "./ProductData"
import { IphoneFile } from "./ProductData"
import { OppoFile } from "./ProductData"
import { VivoFile } from "./ProductData"
import { GioneeFile } from "./ProductData"
import { RedmiFile } from "./ProductData"
import { HonorFile } from "./ProductData"
import './index.css'
import { useRef } from "react"


function App() {
const samsung = PhoneDataFile.map(item => <Product key={item.id} item={item}/>)
const iphone = IphoneFile.map(item => <Product key={item.id} item={item}/>)
const oppo = OppoFile.map(item => <Product key={item.id} item={item}/>)
const vivo = VivoFile.map(item => <Product key={item.id} item={item}/>)
const gionee = GioneeFile.map(item => <Product key={item.id} item={item}/>)
const redmi = RedmiFile.map(item => <Product key={item.id} item={item}/>)
const honor = HonorFile.map(item => <Product key={item.id} item={item}/>)

 const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -250, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="Fullpage">
      <Sidebar/>
      <Banner/>
       <Body/>
       <ViewUs/>
       <Choose/>
       <Distibutor/>
  
 
  <div className= "slider-wrapper"> 
     <header style={{fontWeight:"Bold", margin:"0", fontSize:"20px", marginBottom:"22rem",position:"absolute"}}>AVAILABLE STOCK</header>
    <div className="slider-container" ref={scrollRef}>
      {samsung}
    </div>
  </div>
     

     <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {iphone}
    </div>
  </div>


   <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {oppo}
    </div>
  </div>

   <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {vivo}
    </div>
  </div>

  
   <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {gionee}
    </div>
  </div>

  <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {redmi}
    </div>
  </div>

  <div className= "slider-wrapper"> 
    <div className="slider-container" ref={scrollRef}>
      {honor}
    </div>
  </div>
       

    </div>

    
  )
}

export default App
