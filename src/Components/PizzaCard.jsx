import React, { useState } from "react";

function PizzaCard(props){
    const [count, setCount] = useState(0);
    return(
        <div className="pizza-card">
            <div className="main-img"><img src={props.img} /></div>
            <div class="text-block">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <select>
                    <option>Диаметр</option>
                    <option>10</option>
                    <option>15</option>
                    <option>25</option>
                </select>

                <h4>от 550 ₽</h4>
               
                <div class="btn-group">
                <button className="main-button" onClick={function(){if (count>0) {setCount(count - 1)}}}>-</button>
                    <button className="main-dropdown">{count}</button>
                    <button className="main-button" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div class="btn-group">
                    <button className="main-buy">
                        <img src={props.img2} />
                    </button>
                </div>
                
               
                
            </div>
            
        </div>
    );
}

export default PizzaCard;