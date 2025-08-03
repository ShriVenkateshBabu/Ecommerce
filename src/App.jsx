
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
const App = () => {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
