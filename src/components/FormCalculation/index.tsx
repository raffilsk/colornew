import { useState } from 'react';
import { Container } from './styles'

export function FormCalculation() {
    const [paint, setPaint] = useState({
        small: 0,
        medium: 0,
        big: 0,
    });

    const handleSubmit = (event: any) => {
        setPaint({
            ...paint,
            [event.target.name]: event.target.value
        })
    }

    const amoutPain = () => {
        return (
            Number(paint.small * 4.5) + Number(paint.medium * 18) + Number(paint.big * 90)
        )
    }

    const value = () => {
        return (
            Number(paint.small * 35) + Number(paint.medium * 80) + Number(paint.big * 360)
        )
    }

    return (
        <Container onSubmit={handleSubmit}>
            <h1>Quantidade</h1>
            <div className='alignContent'>
                <form >
                    <input
                        placeholder="900ml"
                        name="small"
                        onChange={handleSubmit}
                    />
                    <input
                        placeholder="3.6L"
                        name="medium"
                        onChange={handleSubmit}
                    />
                    <input
                        placeholder="18l"
                        name="big"
                        onChange={handleSubmit}
                    />
                </form>
                <div className='summary'>
                    <div>
                        <header>Rendimento/ m²</header>
                        <strong>{amoutPain()}</strong>
                    </div>
                    <div>
                        <header>Valor em R$</header>
                        <strong>{value()}</strong>
                    </div>
                </div>
            </div>
        </Container>
    )
}