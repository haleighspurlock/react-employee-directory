import { useEffect, useState } from 'react';
import API from '../utils/API';
import { Table } from 'react-bootstrap'
import { FaSortUp, FaSortDown } from 'react-icons/fa';

const SortIcon = ({isAscending, size}) => {
    let icon = isAscending ? <FaSortUp size={size}/> : <FaSortDown size={size} />
    return <>{icon}</>
}

const EmployeeTable = ({filter}) => {
    const [initialEmployees, setInitialEmployees] = useState([])
    const [sortName, setSortName] = useState('asc')

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

    const onSortNameClick = () => {
        if(sortName === 'asc') {
            setSortName('dsc')
        } else {
            setSortName('asc')
        }
    }
    
    let employees = initialEmployees.filter((emp)=>{
        const name = fullName(emp).toLowerCase()
        return name.startsWith(filter.toLowerCase())
    })

    if(sortName === 'asc') {
        employees = employees.sort((a, b)=>a.name.first > b.name.first ? 1 : -1)
    } else {
        employees = employees.sort((a, b)=>a.name.first > b.name.first ? -1 : 1)
    }
    
    return (
        <>
        <Table  striped bordered hover className='table'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name <span onClick={onSortNameClick} style={{cursor: 'pointer'}}><SortIcon size={15} isAscending={sortName === 'asc'} /></span></th>
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