import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/add-expense' exact Component={AddExpense} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
