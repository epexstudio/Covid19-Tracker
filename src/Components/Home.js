import React , {Component} from 'react';
import logo from "./covid.png";
import {Card} from 'react-bootstrap';
import Axios from 'axios';
import './Home.css'
class Home extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        Axios.get("https://api.covid19api.com/world/total").then(response=>
        {
             this.setState({data:response.data});
       });
    }
    render(){
        return(
            <div className="heading">
                <img image-fluid src= {logo} />
                <h3>Tracker</h3>
                <Card className="badge badge-warning" style={{ width: '18rem',marginRight:'10px',color:'#000'}}>
                            <Card.Body className="text-center">
                                <Card.Title>TOTAL CONFIRMED</Card.Title>
                                <h3 style={{letterSpacing:'1px'}}>{this.state.data.TotalConfirmed}
                                    </h3>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="badge badge-danger" style={{ width: '18rem',color:'#000'}}>
                            <Card.Body className="text-center">
                                <Card.Title>DEATH</Card.Title>
                                <h3 style={{letterSpacing:'1px'}}>{this.state.data.TotalDeaths}</h3>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="badge badge-success" style={{ width: '18rem',marginLeft:'10px',color:'#000'}}>
                            <Card.Body className="text-center">
                                <Card.Title>TOTAL RECOVERED</Card.Title>
                                <h3 style={{letterSpacing:'1px'}}>{this.state.data.TotalRecovered}</h3>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
            </div>
        )
        
    }
}
export default Home;