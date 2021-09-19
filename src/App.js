import './App.css';
import Home from "./Components/Home";
import {Provider} from "react-redux";
import Store from "./Store/Store";

function App() {
  return (
      <Provider store={Store}>
        <Home/>
      </Provider>
  );
}

export default App;
