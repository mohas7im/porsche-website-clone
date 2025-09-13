import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./Components/Redux/store.js";
import { MenuProvider } from "./Components/MenuContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <MenuProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MenuProvider>
    </BrowserRouter>
  </StrictMode>
);
