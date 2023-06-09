

import { Navbar,Hero,Tech,Contact,Experience, About,Projects } from "./components"
import { BrowserRouter } from "react-router-dom"
import { StarsCanvas } from "./components/canvas"
const App=()=>{
  

  return (
    <BrowserRouter>
    <div className="relative  bg-black w-[100vw]">
      <section>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
     </div> 
     </section> 
       <About/>
       <Tech/>
       <Experience/>
       <Projects/>
       <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
       </div>


    </div>
    </BrowserRouter>
  )
}

export default App
