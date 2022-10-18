import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles'

export function TransactionsTable() {

    const transactions = useContext(TransactionsContext)

    console.log(transactions, 'tsts')

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fruta</td>
                        <td className="withDraw">- R$50</td>
                        <td>Comida</td>
                        <td>25/09/2022</td>
                    </tr>
                    <tr>
                        <td>Salario</td>
                        <td className="deposit">R$7.500</td>
                        <td>Beneficios</td>
                        <td>25/09/2022</td>
                    </tr>
                    <tr>
                        <td>Fruta</td>
                        <td>R$50</td>
                        <td>Comida</td>
                        <td>25/09/2022</td>
                    </tr>
                </tbody>
            </table>

        </Container>

    )
}