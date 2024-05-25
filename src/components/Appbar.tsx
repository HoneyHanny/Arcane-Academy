import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import logo from '/arcane.svg'
import '../styles/appbar.css'

const Appbar = () => {
  return (
    <header className="py-2 px-2 lg:px-8 border-b flex flex-row justify-between">
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          alt="Arcane Academy"
          className="h-10 w-10 md:h-16 md:w-16 lg:h-24 lg:w-24 logo"
        />
        <h1 className="scroll-m-20 text-1xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Arcane Academy
        </h1>
      </div>
      <div className="flex items-center space-x-2 lg:gap-16">
        <Link to="/home">
          <Button variant="outline">Home</Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Appbar
