import React, {Component} from 'react';

class Audio extends Component {
    render() {
        return (
            <audio autoPlay preload>
                <source src="portfolio.mp3" type="audio/mpeg" />
            </audio>
        )
    }
}

export default Audio;