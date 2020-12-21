import React, { Component } from 'react';
import { getMusic } from './services/servicesD&D';
import './style.css'


class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spells: []
        }
    }
    async componentDidMount() {
        try {
            const spells = await getMusic();
            this.setState({ spells });
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const { spells } = this.state;

        const items = spells.map(item => {
            return (
                <div key={item.id} className="item">
                    <p><b>  {item.question}  </b> </p>
                    <p>{item.correct_answer}</p>
                </div>
            )
        })

        return (
            <div>
                {items.length ?
                    <div>{items}</div> :
                    <p>...</p>
                }
            </div>
        )
    }
}

export default Music;