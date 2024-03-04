import React, { Component } from 'react'

// style file import 
import '../Style/navbar.css'

class Navbar extends Component {

    state = {clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <>
                <nav>
                    <a href="index.html">SHINWARI</a>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="index.html" className='active'>Home</a></li>
                            <li><a href="index.html">About</a></li>
                            <li><a href="index.html">Services</a></li>
                            <li><a href="index.html">Portfolio</a></li>
                            <li><a href="index.html">Contact</a></li>
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

export default Navbar