import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/auth/signup/Signup";
import Signin from "./components/auth/signin/Signin";
import ResetPassword from "./components/auth/resetPassword/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/resetpassword" element={<ResetPassword />} />
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
