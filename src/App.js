import './App.css';
import MainBlock from './Components/PizzaCard';
import img1 from './images/img1.png';

function App(){
    return(
        <div>
            <div className="main-block-cover">
                <MainBlock title="Пепперони" img={img1} text='Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла'/>
            </div>
        </div>
    );
}

export default App;