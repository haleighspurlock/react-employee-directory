import EmployeeTable from './EmployeeTable';
import {useState} from 'react';
import {Form} from 'react-bootstrap'


const EmployeeDirectory = () => {
    const [searchedEmployee, setSearchedEmployee] = useState('')

    const employeeInputSearch = (e) => {
        setSearchedEmployee(e.target.value)
    }

    return (
    <>
        <Form>
            <Form.Control type='text' placeholder='Search Employee' onInput={employeeInputSearch} />
        </Form>
        <EmployeeTable filter={searchedEmployee}/>
    </>
    )
}

export default EmployeeDirectory;