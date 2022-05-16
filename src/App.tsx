import { BrowserRouter } from "react-router-dom";
import history from "./history";
import AppRoutes from "./routes";

function App() {
  return(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  )
}

export { App };
