import { Canvas } from "@react-three/fiber";
import Experince from "./Components/Experince";
import Configurator from "./Components/Configurator";
import "./App.css";
import { CustomizationProvider } from "./Components/contexts/Customization";
import backarrow from './assets/back_arrow.png'
import crossbtn from './assets/cross_btn.png'
import {Link} from 'react-router-dom'

function App() {
  return (
  <CustomizationProvider>
   <div className="App">
    <Link to='/'><button className="position_backarrow"><img src={backarrow} alt="back"/></button></Link>
    <Link to='/'> <button className="position_crossbtn"><img src={crossbtn} alt="cross"/></button></Link>
    <Canvas>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#213547", 10, 20]} />
     <Experince/>
    </Canvas>
    <Configurator/>
  </div>;
  </CustomizationProvider>
  );
}
export default App;