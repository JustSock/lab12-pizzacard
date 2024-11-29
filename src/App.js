import './App.css';
import MainBlock from './Components/PizzaCard';
import img1 from './images/img1.png';
import img2 from './images/img2.png';

function App(){
    return(
        <div className="main-block-cover">
            <MainBlock title="Пепперони" img={img1} img2={img2} text='Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла'/>
        </div>
    );
}

export default App;