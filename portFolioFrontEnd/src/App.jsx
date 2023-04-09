

import { Navbar,Hero,Tech,Contact,Experience, About } from "./components"
import { BrowserRouter } from "react-router-dom"
const App=()=>{
  

  return (
    <BrowserRouter>
    <div className="relative  bg-black w-[100vw]">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
     </div>  
       <About/>
       <Tech/>
       <Experience/>
       <div className="relative z-0">
        <Contact/>
       </div>


    </div>
    </BrowserRouter>
  )
}

export default App
