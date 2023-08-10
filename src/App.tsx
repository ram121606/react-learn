
import './App.css'
import Axios from './components/Axios'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import Todo from './components/Todo'
import Simple from './components/Simple'


function Nav(){
  return (
    <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/axios">Axios</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/simple">Simple</Link></li>
      </ul>
  )
      
}


function App() {
  

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/axios" element={<Axios/>} />
          <Route path='/simple' element={<Simple/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
