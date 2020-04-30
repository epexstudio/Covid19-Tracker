import React , {Component} from 'react';
import {Card,Accordion,Button,Table} from 'react-bootstrap';
import Axios from 'axios';

class StateData extends Component{

    constructor(){
        super();
        this.state = {
            stateData : {}
        }
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>
        {
             this.setState({stateData:response.data});
       });
    }

    render(){
        let keys= Object.keys(this.state.stateData);
        return(
            <div className="row" style={{display:'contents'}}>
                <div className="text-center">
                    <br></br>
                    <h3 style={{marginLeft:'320px'}}>
                        State Wise List
                    </h3>
                </div>
                <div className="col-md-12">
                <Accordion  style={{marginLeft:'320px'}}>
                    {
                        keys.map((item,key)=>{
                            let districts = this.state.stateData[item].districtData;
                            let district_keys = Object.keys(districts);
                            let total_active = 0;
                            let total_confirmed = 0;
                            let total_deaths = 0;
                            let total_recover = 0;
                            let district_list = [];
                            for(let x in districts){
                               total_active += districts[x].active;
                               total_confirmed += districts[x].confirmed;
                               total_deaths += districts[x].deceased;
                               total_recover += districts[x].recovered;
                               let ob = districts[x];
                               ob["district_name"]= x;
                               district_list.push(ob);
                            }
                            console.log(district_list);
                            return(
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                                            {item} - 
                                            <span className="btn-warning p-1 mr-2">Total Cases - {total_confirmed}</span> 
                                            <span className="btn-primary p-1 mr-2">Active-{total_active} </span>
                                            <span className="btn-success p-1 mr-2">Recovered-{total_recover} </span>
                                            <span className="btn-danger p-1 mr-2">Death-{total_deaths}</span>       
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={key}>
                                        <Card.Body>
                                            <Table striped bordered hover size="sm">
                                                <thead>
                                                <tr>
                                                    <td>District</td>
                                                    <td>Confirmed</td>
                                                    <td>Active</td>
                                                    <td>Recovered</td>
                                                    <td>Deaths</td>
                                                </tr> 
                                                </thead>
                                                <tbody>
                                                    {
                                                        district_list.map((item,key)=>{
                                                            return(
                                                                <tr>
                                                                    <td>{item.district_name}</td>
                                                                    <td>{item.confirmed}</td>
                                                                    <td>{item.active}</td>
                                                                    <td>{item.recovered}</td>
                                                                    <td>{item.deceased}</td>
                                                                </tr>


                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }
                </Accordion>
                </div>
            </div>
        )
    }
}
export default StateData;