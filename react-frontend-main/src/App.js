import logo from './logo.svg';
import './App.css';
import Text from './Text';
import Count from './count';

function App() {
  let array = ["apple","banana","orange","grapes"];
  return (
    <div className="App">
      <h1> Jeya</h1>
      <hr/>
      {
        array.map((x)=><Text fruits ={x}/>)
      }
      <Count />
    </div>
  )}

  export default App;