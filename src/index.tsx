import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const store = setupStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
