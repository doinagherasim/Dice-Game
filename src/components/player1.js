
function Player1(props) {
    return (
        <section className={`player player--0 ${props.active ? "player--active" : ""}`}>
            <div>
                <h2 className="name" id="name--0">Player 1</h2>
                <p className="score" id="score--0">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">{props.rollDice}</p>
                </div>
            </div>
        </section >
    )
};

export default Player1;