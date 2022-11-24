import React, { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/316536077_2096156797253207_1740241986636718765_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGutzxTR7YNxrm02ldtpEh7WJnl8DgDrp9YmeXwOAOun52cB0DhCWB3YV4I0rkk0ntkLiSi5zOg1HTU1d6-YOyk&_nc_ohc=xJ-BVzGfEDkAX-pNMCk&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfDsrqpcDRgba6E39eDI9VqEA5sJ9h0ihQgM0UKI4dAtAw&oe=63857F96" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am kutchatabodee', 'I am a Student from KMUTNB']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;