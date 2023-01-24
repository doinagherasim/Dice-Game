import { useState } from 'react';
import Player from './player';

import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'

// dispaly random dice
const getDiceImage = function (dice) {
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

function Game(props) {
    // set initial values and State
    const [roll, setRoll] = useState(0); // initial values dice
    const [score1, setScore1] = useState(0); // initial score player 1
    const [score2, setScore2] = useState(0); // initial score player 2
    const [player, setPlayer] = useState(1); // start with player 1
    const [totalScore1, setTotalScore1] = useState(0);
    const [totalScore2, setTotalScore2] = useState(0);
    const [congrats1, setCongrats1] = useState(false);
    const [congrats2, setCongrats2] = useState(false);
    const [winner1, setWinner1] = useState('');
    const [winner2, setWinner2] = useState('')

    // 1.  rolling dice functionality
    const rollDice = () => {
        // 1. generate random dice
        const dice = Math.trunc(Math.random() * 6 + 1);
        // 2. dispaly dice
        const diceImage = getDiceImage(dice);
        setRoll(diceImage);

        // 3. check the rolled dice if it is 1
        // 3.1 Add dice roll to current score and dispay new score
        if (dice !== 1 && (totalScore1 < 20 && totalScore2 < 20) && player === 1) {
            setPlayer(1)
            setScore1(score1 + dice);
            // setTotalScore1(totalScore1 + dice);
        }
        else if (dice !== 1 && (totalScore1 < 20 && totalScore2 < 20) && player === 2) {
            setPlayer(2);
            setScore2(score2 + dice);
        }
        else if ((dice !== 1 && (totalScore1 >= 20) && player === 1) || (dice !== 1 && (totalScore2 >= 20) && player === 2)) {
            resetGame();
        }
        // 3.3 switch player
        else if (dice === 1 && player === 1 && (totalScore1 < 20 && totalScore2 < 20)) {
            setScore1(0);
            setScore2(0);
            setPlayer(2);
        }
        else if (dice === 1 && player === 2 && (totalScore1 < 20 && totalScore2 < 20)) {
            setScore2(0);
            setScore1(0)
            setPlayer(1);
        }
        else if ((dice === 1 && player === 1 && (totalScore1 >= 20 || totalScore2 >= 20))
            || (dice === 1 && player === 2 && (totalScore1 >= 20 || totalScore2 >= 20))) {
            resetGame();
        };


    };
    // Hold score 
    const holdScore = function (props) {
        const totalScore1Value = totalScore1 + score1;
        const totalScore2Value = totalScore2 + score2;
        setTotalScore1(totalScore1Value);
        setTotalScore2(totalScore2Value);
        // 4. Add current score to total score 
        if (player === 1 && totalScore1Value < 20) {
            setScore1(0);
            setPlayer(2);
            console.log('1')
        }
        else if (player === 2 && totalScore2Value < 20) {
            console.log('2')
            setScore2(0);
            setPlayer(1);
        }
        else if (player === 1 && totalScore1Value >= 20) {
            setCongrats1('WINNER! 🥇');
            setCongrats2('NEXT TIME 💪');
            setWinner1(true)
        }
        else if (player === 2 && totalScore2Value >= 20) {
            setCongrats1('NEXT TIME 💪')
            setCongrats2('WINNER! 🥇');
            setWinner2(true);
        }
        if ((props.dice !== 1 && (totalScore1 >= 20) && player === 1) ||
            (props.dice !== 1 && (totalScore2 >= 20) && player === 2)) {
            resetGame();
        }
        else if ((props.dice === 1 && player === 1 && (totalScore1 >= 20 || totalScore2 >= 20))
            || (props.dice === 1 && player === 2 && (totalScore1 >= 20 || totalScore2 >= 20))) {
            resetGame();
        };
    }

    // 5. Set the winner 
    //restetGame
    const resetGame = function () {
        setRoll(false);
        setScore1(0);
        setScore2(0);
        setTotalScore1(0);
        setTotalScore2(0)
        setPlayer(1);
        setCongrats1(false);
        setCongrats2(false);
        setWinner1(false);
        setWinner2(false);
    };

    return (
        <div className="html">
            <div className="body">
                <div className="main">
                    <Player resetGame={score1} rollDice={score1} active={player === 1} name="1" total={totalScore1} winner={winner1} congrats={congrats1} />

                    <Player resetGame={score2} rollDice={score2} active={player === 2} name="2" total={totalScore2} winner={winner2} congrats={congrats2} />

                    {< img src={roll} alt="" className="dice" />}
                    <button onClick={resetGame} className="btn btn--new">🔄 New game</button>
                    <button onClick={rollDice} className="btn btn--roll">🎲 Roll dice</button>
                    <button className="btn btn--hold" onClick={holdScore}>📥 Hold</button>
                </div>
            </div>
        </div>
    )
};

export default Game;