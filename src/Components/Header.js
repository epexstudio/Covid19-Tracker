import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home"><i class="fas fa-shield-virus"style={{fontSize:'50px'}}></i></Navbar.Brand>
                <Nav className="mr-auto">
                <Link className="nav-link" to="/world">World</Link>
                <Link className="nav-link" to="/india">India</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Navbar>
        )
    }
}

export default Header;