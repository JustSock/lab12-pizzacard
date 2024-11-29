import React, { useState } from "react";

function PizzaCard(props){
    const [count, setCount] = useState(0);
    return(
        <div className="pizza-card">
            <div className="main-img"><img src={props.img}/></div>
            <h4 className="main-block-header">{props.title}</h4>            
            <p className="main-block-text">{props.text}</p>
            <p className="main-dropdown">Диаметр</p>
            <p className="main-price">от 550 ₽</p>
            <button className="main-button" onClick={() => setCount(count - 1)}>-</button>
            <p className="main-dropdown">{count}</p>
            <button className="main-button" onClick={() => setCount(count + 1)}>+</button>
            <button className="main-buy">Купить</button>
        </div>
    );
}

export default PizzaCard;