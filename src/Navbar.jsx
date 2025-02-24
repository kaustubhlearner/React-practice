import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
    return (
        <div>

            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <br />
                <li>
                <Link to='/about'>About</Link>
                </li>
                <br />
                <li>
                <Link to='/contact'>Contact Us</Link>
                </li>
                <br />
                <li>
                <Link to='/college'>College</Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar