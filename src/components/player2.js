function Player2(props) {
    return (
        <section className={`player player--0 ${props.active ? "player--active" : ""}`}>
            <div>
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">{props.rollDice}</p>
                </div>
            </div>
        </section>
    )
};

export default Player2;