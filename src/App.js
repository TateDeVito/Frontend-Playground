import './App.css';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Components/MainPage.tsx';
import SignUpForm from './Components/HTML/SignUpForm/SignUpForm.tsx';
import Recipe from './Components/HTML/Recipe/Recipe.tsx';
import ItemCart from './Components/HTML/ItemCart/ItemCart.tsx';

const answersCompleted = [{ title: "Sign-Up Form", url: '/signup-form' },
{ title: "Item Cart", url: '/item-cart' }
  // { title: 'Recipe', url: '/recipe' }
]
// TODO: "Item Cart", "Blog", "Rainbow Circle", "Navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft answers={answersCompleted} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="signup-form" element={<SignUpForm />} />
            <Route path="recipe" element={<Recipe />} />
            <Route path="item-cart" element={<ItemCart />} />
          </Routes>
        </BrowserRouter>
        <footer className="fine-print">Many of these examples are my own answers and come from the <a href="https://www.algoexpert.io/frontend/product">FrontEnd Expert</a> course from <a href="https://www.algoexpert.io/product">AlgoExpert.io</a> unless stated otherwise.</footer>
      </header>
    </div>
  );
}

export default App;
