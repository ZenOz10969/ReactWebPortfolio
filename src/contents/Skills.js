import React, { Component } from 'react'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['JAVA', 'PYTHON', 'C', 'ReactJS', 'SQL','Play video games','Listen to music','Watch a movies','Badminton']
        }
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills & Hobbies</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;
