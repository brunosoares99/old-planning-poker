import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home/index";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
};

export default AppRoute;