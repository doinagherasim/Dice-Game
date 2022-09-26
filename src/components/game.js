import { useState } from 'react';
import Player1 from './player1';
import Player2 from './player2';

import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'

// Starting conditions
let score = 0;

function Game(props) {
    // initial values
    const [roll, setRoll] = useState(0); // initial values dice
    const [score1, setScore1] = useState(0); // initial score player 1
    const [score2, setScore2] = useState(0); // initial score player 2
    const [player, setPlayer] = useState(1);

    // 1.  rolling dice functionality
    const rollDice = () => {
        // generate random dice
        const dice = Math.trunc(Math.random() * 6 + 1);
        // dispaly dice
        const random = function () {
            if (dice === 1) {
                return dice1;
            } else if (dice === 2) {
                return dice2;
            }
            else if (dice === 3) {
                return dice3;
            }
            else if (dice === 4) {
                return dice4;
            }
            else if (dice === 5) {
                return dice5;
            }
            else if (dice === 6) {
                return dice6;
            }
        };

        setRoll(random());


        // 2. check the rolled dice
        if (dice !== 1) {
            // add dice to the current score
            score += dice;
            setScore1(score);

        } else {
            // switch player
            setPlayer(2);
            setScore2(score);
        }
        // set state Roll


    };
    // restet Game
    const resetGame = function () {
        setRoll(false);
        setScore1(0);
        setScore2(0);
    };


    return (
        <div className="html">
            <div className="body">
                <div className="main">
                    <Player1 resetGame={score1} rollDice={score1} active={player === 1} />

                    <Player2 resetGame={score2} rollDice={score2} active={player === 2} />

                    {< img src={roll} alt="" className="dice" />}
                    <button onClick={resetGame} className="btn btn--new">🔄 New game</button>
                    <button onClick={rollDice} className="btn btn--roll">🎲 Roll dice</button>
                    <button className="btn btn--hold">📥 Hold</button>
                </div>
            </div>
        </div>
    )
}

export default Game;