
import './styles/app.scss'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'

function App() {

  return (
    <div className="app-container">
      <Sidebar />
      <Customers />
    </div>
  )
}

export default App
