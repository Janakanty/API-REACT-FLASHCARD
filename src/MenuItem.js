import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
    render() {
        return (
            <Link to={this.props.itemPath}>
                <div >
                    {this.props.itemName}
                </div>
            </Link>
        )
    }
}

export default MenuItem;