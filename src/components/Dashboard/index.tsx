import { Container } from "./styles";
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';
import { FormCalculation } from '../../components/FormCalculation'

export function Dashboard(){    

    return(
    <Container>
        <Form/>
        <FormCalculation />
        <Table />         
    </Container>
    )
}