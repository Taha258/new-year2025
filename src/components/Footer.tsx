export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-yellow-400">New Year 2025</h3>
              <p className="mt-2">Celebrating new beginnings</p>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition duration-300">Home</a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">About</a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">Contact</a>
            </nav>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 New Year Celebration. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  