import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : Kutdee2544@gmail.com</h3>
                <h3>Instagram : @kutdee.esa</h3>
                <h3>FaceBook : Kutdee Eiamsa-ard</h3>
                <h3>LINE : kutdee69</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;
