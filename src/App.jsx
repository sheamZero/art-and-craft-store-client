
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <header className='border-2 px-4 md:px-8 lg:px-16'>
        <Navbar></Navbar>
      </header>

      <main className='border-2 px-4 md:px-8 lg:px-16 py-8 min-h-[calc(100vh-100px)]'>
        <Outlet></Outlet>
      </main>

      <footer className=''>

      </footer>

    </>
  )
}

export default App
