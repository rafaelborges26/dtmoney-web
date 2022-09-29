import { createServer } from 'miragejs'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {

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
    }
  })

  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}