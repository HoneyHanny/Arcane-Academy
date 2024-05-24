import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <header className="py-4 md:py-8 border-b px-2 md:px-8 lg:px-16 flex flex-row justify-between">
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        Arcane Academy
      </h1>
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
