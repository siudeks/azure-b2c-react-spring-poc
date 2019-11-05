import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
               Login Page
              
               <p>
                   <Link to="/dashbaord">Go to Dashoabrd</Link>
                </p>
            </div>
        )
    }
}
