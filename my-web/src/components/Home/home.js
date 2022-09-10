import Img from './MyPhoto.jpg';
import "./home.css";
import "./homeBreak.css";

const Home = ()=>{
    return(
        <div className="home">
            <p>
                Hello, <br/>
                Shivaprasad C S, here !! <br />
                <span>final year B.Tech at VIT, Vellore</span>
            </p>
            <div className="Img">
                <img src={Img} alt="" />
            </div>
        </div>
    );
}

export default Home;