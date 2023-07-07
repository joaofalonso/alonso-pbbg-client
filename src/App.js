import './App.css';
import { Banner } from './components/Banner';
import { Realms} from './components/Realms'
import Api from './components/api';

function App() {



  return (
    <div className="App">
      <Banner />
      <Realms />   
      <Api />
      {/* <p>id:{id}</p>
      <p>realm,:{realm}</p>
      <p>type:{type}</p>
      <p>experience:{experience}</p>
      <p>level:{level}</p>
      <p>gold:{gold}</p>
      <p>food:{food}</p>
      <p>building:{building}</p>
      <p>unit:{unit}</p> */}
    </div>
  );
}

export default App;
