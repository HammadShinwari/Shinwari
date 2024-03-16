import React, { Component } from 'react'

// style file import 
import '../Style/navbar.css'

// Its a Class component

class Navbar extends Component {

    state = {clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <>
                <nav>
                    <h2><span>Shin</span>wari</h2>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="#" className='active'>Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )     
    }
}

export default Navbar;