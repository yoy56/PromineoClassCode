
import './App.css';
//import Main from './componants/main';
import {ItemList} from './componants/ItemList';

function App() {
  return (
    <div className="App">
      <ItemList props={{test: 'data'}}/>
    </div>
  );
}

export default App;
