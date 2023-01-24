
function Player(props) {
    return (
        <section className={`player player--0 ${props.active ? "player--active" : ""}  || ${props.winner ? "player--winner" : ""} `}>
            <div>
                <h2 className="name">{props.congrats}</h2>
                <h2 className="name" id="name--0">Player {props.name}</h2>
                <p className="score" id="score--0"> {props.total}</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">{props.rollDice}</p>
                </div>
            </div>
        </section >
    )
};

export default Player;