
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>

      <header className="border-b border-teal-100 px-4 md:px-8 lg:px-16">
        <Navbar />
      </header>

      <main className="border-b border-teal-100 px-4 md:px-8 lg:px-16 py-8 min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
