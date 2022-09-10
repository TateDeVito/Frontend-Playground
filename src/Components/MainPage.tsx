import * as React from "react";
import Confetti from 'react-confetti';

const confettiWelcome =
    <div>
        <Confetti />
        <h2><b>Welcome!</b></h2>
        <div className="block-text"><b>My name is Tate, and I like to keep my FrontEnd skills sharp!
        </b> I am always learning. This React App is used to track my progress as I learn new front end tooling,
            complete exercise, and serves as a sort of display on that work I have done that I can always
            come back to.
        </div>
    </div>;

export default function MainPage() {
    return confettiWelcome;
}