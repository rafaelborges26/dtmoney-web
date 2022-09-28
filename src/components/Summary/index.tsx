import { Container } from "./styles";
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Saídas" />
                </header>
                <strong>- R$200</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Saídas" />
                </header>
                <strong>R$800</strong>
            </div>
        </Container>
    )
}