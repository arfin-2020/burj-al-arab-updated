import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from "./components/Book/Book";
import AuthProvider from "./components/Context/AuthContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<PrivateRoute/>}>
            <Route path="book/:bedType" element={<Book />} />
            <Route path="book" element={<Book />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/:pageName" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
