import Modal from 'react-modal'
import { createServer } from 'miragejs'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionsProvider } from './TransactionsContext';
import { NewTransactionModal } from './components/NewTransactionModal'
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }


  createServer({
    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'food',
            createAt: new Date()

          }
        ]
      })
      this.post('/transactions', (schema, request) => { 
        const data = JSON.parse(request.requestBody)

        return data;
      })
      }
  })

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal  }/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}