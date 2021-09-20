import {Provider} from "react-redux";
import Store from "./Store/Store";
import Parent from "./Components/Parent/Parent";

function App() {
  return (
      <Provider store={Store}>
        <Parent/>
      </Provider>
  );
}

export default App;
