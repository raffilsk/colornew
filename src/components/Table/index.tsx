import { Container } from './styles';

export function Table() {
    return (
        <Container>
            <table>
                <tr>
                    <th>Quantidade</th>
                    <th>Rendimento</th>
                    <th>Valor(R$)</th>
                    <th>R$/m²</th>
                </tr>
                <tr>
                    <td>18L</td>
                    <td>90m²</td>
                    <td className="alignLeft">R$ 360,00</td>
                    <td className="alignLeft">R$ 4/m²</td>
                </tr>
                <tr>
                    <td>3,6L</td>
                    <td>18m²</td>
                    <td className="alignLeft">R$ 80,00</td>
                    <td className="alignLeft">R$ 4,4/m²</td>
                </tr>
                <tr>
                    <td>900ml</td>
                    <td>4,5m²</td>
                    <td className="alignLeft">R$ 35,00</td>
                    <td className="alignLeft">R$ 7,7/m²</td>
                </tr>

            </table>
        </Container>
    )
}