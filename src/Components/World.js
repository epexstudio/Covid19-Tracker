import React , {Component} from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';

class World extends Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }


    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>
        {
             this.setState({data:response.data});
       });
    }


    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <td>Country</td>
                            <td>Total Cases</td>
                            <td>Active</td>
                            <td>Recovered</td>
                            <td>Today's Cases</td>
                            <td>Death</td>
                            <td>Today's Deaths</td>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item,key)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <img style={{width:'50px',height:'30px',marginRight:'10px'}}src={item.countryInfo.flag}/>
                                                {item.country}
                                            </td>
                                            <td>{item.cases}</td>
                                            <td>{item.active}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.todayCases}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.todayDeaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                
            </div>
        )
    }
}
export default World;