import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages';
import { Header } from './components';
import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

function App() {

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
