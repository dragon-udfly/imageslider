import './App.css';
import FruitShowCase from './Components/FruitShowCase'
import ImageSlider from './Components/ImageSlider';
import StatBox from './Components/StatBox';

function App(){
  const images=["Images/img1.jpg", "Images/img2.jpg", "Images/img3.jpg", "Images/img4.jpg", "Images/img5.jpg"];
  return (
    <div>
        <FruitShowCase/>
        <br />
        <ImageSlider images={images} interval={3000}/>
        <br />
        <StatBox/>
        <br />
    </div>
  );
}

export default App;