import { Container } from './styles'

interface resultProps {
    result: number;
}

export function Summary({ result }: resultProps) {

    return (
        <Container>

            <div>
                <header>M² totais</header>
                <strong>{result}</strong>
            </div>

            <div>
                <header>Qtd em litros</header>
                <strong>{result / 5}</strong>
            </div>

        </Container>

    )
}