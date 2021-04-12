import EmployeeTable from './EmployeeTable';
import {useState} from 'react';
import {Row, Form, InputGroup, Container} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'


const EmployeeDirectory = () => {
    const [searchedEmployee, setSearchedEmployee] = useState('')

    const employeeInputSearch = (e) => {
        setSearchedEmployee(e.target.value)
    }

    return (
    <>
    <Container>
        <Row>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type='text' placeholder='Search Employee' onInput={employeeInputSearch} style={{cursor: 'pointer'}}/>
                </InputGroup>
            </Form>
        </Row>
        <Row>
            <EmployeeTable filter={searchedEmployee}/>
        </Row>
    </Container>
    </>
    )
}

export default EmployeeDirectory;