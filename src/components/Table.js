import React, {Component} from 'react';
import API from '../utils/API';

class Table extends Component {
    state = {
        employee: [],
    };
  // When the component mounts, get a list of all available employees and update this.state.employee
    componentDidMount() {
        this.findEmployees();
    };

    findEmployees = () => {
        API.search()
        .then(res => this.setState({ allEmployee: res.data.results }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                </tbody>
            </table>
        )
    }
};

export default Table;