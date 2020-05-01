import React , {Component} from 'react';
import logo from "./covid.png";
import './Home.css'
class Home extends Component{
    render(){
        return(
            <div className="heading">
                <img image-fluid src= {logo} />
                <h3>Tracker</h3>
            </div>
        )
        
    }
}
export default Home;