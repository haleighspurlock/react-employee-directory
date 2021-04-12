import { useEffect, useState } from 'react';
import API from '../utils/API';

const Table = () => {
    const [initialEmployees, setInitialEmployees] = useState([])
    useEffect(() => {
       getInitialEmployees()
    }, []);

    let getInitialEmployees = async () => {
        let users = await API.getAllUsers()
        setInitialEmployees(users)
    }
    const fullName = (employee) => {
        return `${employee.name.first} ${employee.name.last}`
    }

    return (
        <>
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
                {initialEmployees.map((employee) => {
                    return <tr key={employee.email}>
                        <td><img src={employee.picture.thumbnail} alt={fullName(employee)+"'s picture"}></img></td>
                        <td>{fullName(employee)}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        </tr>
                })}
            </tbody>
        </table>
        </>
    )
}

// class Table extends Component {
//     state = {
//         employee: [],
//     };
//   // When the component mounts, get a list of all available employees and update this.state.employee
//     componentDidMount() {
//         this.findEmployees();
//     };

//     findEmployees = async () => {
//         let users = await API.getAllUsers()
//         console.log(users)
//         // .then(res => this.setState({ allEmployee: res.data.results }))
//         // .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <table className='table'>
//                 <thead>
//                     <tr>
//                         <th>Picture</th>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// };

export default Table;