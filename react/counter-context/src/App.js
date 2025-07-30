import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { Counterprovider } from './Components/CountContext';
import Counter2 from './Components/Counter2';

function App() {
  return (
   <>
    <Counterprovider>
    <Counter/>
    <Counter2/>
    </Counterprovider>

   </>
  );
}

export default App;
