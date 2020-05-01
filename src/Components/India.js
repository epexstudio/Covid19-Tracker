import React , {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import StateData from './StateData';
import Axios from 'axios';

class India extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }


    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>
        {
             this.setState({data:response.data});
       });
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src="https://www.countryflags.io/IN/flat/64.png"/>
                    <h3>INDIA</h3><br></br>
                </div>
                <div className="col-md-12">
                    <div className="row" style={{paddingLeft:'12px'}}>
                        <div className="col-md-3">
                        <Card className="badge badge-warning" style={{ width: '18rem'}}>
                            <Card.Body className="text-center">
                                <Card.Title>TOTAL CASES</Card.Title>
                                <h3 >
                                    {this.state.data.cases}
                                    </h3>
                                <Card.Text>
                                    ( Today : Not Available)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-primary" style={{ width: '18rem'}}>
                            <Card.Body className="text-center">
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                    ( Today : Not Available)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem'}}>
                            <Card.Body className="text-center">
                                <Card.Title>RECOVERED</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                                    ( Today : Not Available)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem'}}>
                            <Card.Body className="text-center">
                                <Card.Title>DEATHS</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                                    ( Today : Not Available)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            
                <div className="col-md12">
                    <StateData/>
                </div>

            </div>
        )
    }
}
export default India;