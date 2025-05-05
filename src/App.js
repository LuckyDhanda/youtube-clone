import "../src/App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />

        {/**
         * Head
         * Body
         *  - SideBar
         *    - MenuItems
         *  - MainContainer
         *    - ButtonList
         *    - VideoContainer
         *      - VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
