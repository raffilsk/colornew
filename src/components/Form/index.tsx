import { useState } from "react";
import { Container } from "./styles";
import { Summary } from '../../components/Summary';

export function Form() {
    const [data, setData] = useState({
        parede: 0,
        porta: 0,
        janela: 0,
    });

    const handleSubmit = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const resultIn = () => {
        return Number(data.parede) - ((Number(data.porta) * 1.89) + (Number(data.janela) * 1.5))
    }

    return (
        <Container onSubmit={handleSubmit}>
            <h1>Dados do Ambiente</h1>

            <div className="alignContent">
                <form>                
                    <input
                        placeholder="Metros²"
                        name="parede"
                        onChange={handleSubmit}
                    />
                    
                    <input
                        placeholder="Qtd Portas"
                        name="porta"
                        onChange={handleSubmit}
                    />
                    
                    <input
                        placeholder="Qtd Janelas"
                        name="janela"
                        onChange={handleSubmit}
                    />
                </form>

            <Summary result={resultIn()} />
            </div>

            

            

        </Container>

    )
}