import "./App.css";
import { Provider } from "react-redux";
import Heading from "./components/Heading";
import User from "./components/User";
import store from '../src/store'
function App() {
  return (
    <Provider store = {store} >
      <Heading/>
      <User/>
    </Provider>
  );
}

export default App;
