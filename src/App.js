import {Provider} from "react-redux";
import Store from "./Store/Store";
import RouteHandler from "./Components/Route/RouteHandler";

function App() {
  return (
      <Provider store={Store}>
        <RouteHandler/>
      </Provider>
  );
}

export default App;
