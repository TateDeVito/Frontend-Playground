// TODO: 
// 1. Make it look slightly cleaner - just looks sort of like a side project
// 2. Add cards that show in the UI when you click the various links 
// 3. Create a playground esque theme

import './App.css';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft.tsx';
import AnswerDisplay from './Components/AnswerDisplay.tsx';
import MainPage from './Components/MainPage.tsx';
import Confetti from 'react-confetti';

const answersCompleted = ["Sign-Up Form", "Item Cart", "Recipe", "Blog", "Rainbow Circle", "Navbar"]
const answerToDisplay = "SignUpForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft answers={answersCompleted} />
        <MainPage/>
        <footer className="fine-print">Many of these examples are my own answers and come from the <a href="https://www.algoexpert.io/frontend/product">FrontEnd Expert</a> course from <a href="https://www.algoexpert.io/product">AlgoExpert.io</a> unless stated otherwise.</footer>
      </header>
    </div>
  );
}

export default App;
