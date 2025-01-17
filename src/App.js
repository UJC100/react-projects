import logo from './logo.svg';
import './App.css';

import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />
    </div>
  );
}

export default App;
