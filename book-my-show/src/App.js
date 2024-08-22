
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Routes,Route} from 'react-router-dom';

import Homepage from './pages/home.page';
import Moviepage from './pages/movie.page';
import Playpage from './pages/play.page';


function App() {
  return (
    <div>
<Routes>
  <Route path="/" element ={<Homepage/>}/>
  <Route path="/movie/:id" element ={<Moviepage/>}/>
  <Route path="/plays" element ={<Playpage/>}/>
</Routes>
    </div>
  );
}

export default App;
