import { useEffect, useState } from 'react';
import API from '../utils/API';
import { Table } from 'react-bootstrap'

const EmployeeTable = ({filter}) => {
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
    
    let employees = initialEmployees.filter((emp)=>{
        const name = fullName(emp).toLowerCase()
        return name.startsWith(filter.toLowerCase())
    })

    return (
        <>
        <Table  striped bordered hover className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => {
                    return <tr key={employee.email}>
                        <td><img src={employee.picture.medium} alt={fullName(employee)+"'s picture"}></img></td>
                        <td>{fullName(employee)}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.id.value}</td>
                        </tr>
                })}
            </tbody>
        </Table>
        </>
    )
}

export default EmployeeTable;