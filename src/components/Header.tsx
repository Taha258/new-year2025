export default function Header() {
    return (
      <header className="bg-black bg-opacity-50 p-4 fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">New Year 2025</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
  
  