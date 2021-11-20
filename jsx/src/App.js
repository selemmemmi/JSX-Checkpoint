import './App.css';
import'./style.css';
import  image1 from './imageInSrc.png';

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black" , maxwidth:"100vw"}}>

        <h1 className="title red">Salem memmi</h1>

        <br/>

        <img src={image1} alt="team" />

        <br/>

        <img src="/mageInPublic.jpg" alt="gomycode" />

      </div>

        <video width="620" height="520" controls>

        <source src="/myVideo.mp4" type="video/mp4" />

        </video>
    </div>
   )
}


export default App;
