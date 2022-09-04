// TODO: 
// 1. Make it look slightly cleaner - just looks sort of like a side project
// 2. Add cards that show in the UI when you click the various links 
// 3. Create a playground esque theme

import './App.css';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft.tsx';
import AnswerDisplay from './Components/AnswerDisplay.tsx';

const answersCompleted = ["Sign-Up Form", "Item Cart", "Recipe", "Blog", "Rainbow Circle", "Navbar"]
const answerToDisplay = "SignUpForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft answers={answersCompleted} />
        {/* <AnswerDisplay /> */}
        <h2><b>Welcome!</b></h2>
        <p className="block-text"><b>My name is Tate, and I like to keep my FrontEnd skills sharp!</b> I am always learning. This React App is used to track my progress as I learn new front end tooling, complete exercise, and serves as a sort of display on that work I have done that I can always come back to.</p>
        <footer className="fine-print">Many of these examples are my own answers and come from the <a href="https://www.algoexpert.io/frontend/product">FrontEnd Expert</a> course from <a href="https://www.algoexpert.io/product">AlgoExpert.io</a> unless stated otherwise.</footer>
      </header>
    </div>
  );
}

export default App;
