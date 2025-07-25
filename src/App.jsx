import './app.css'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'
import { useLenis } from './hooks/useLenis'

const App = () => {
  useLenis()

  return (
    <div className="main">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App
