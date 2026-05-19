import { Link, useLocation } from "react-router-dom";

export default function NavBar(){
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '');
    return `px-4 py-2 rounded-lg font-medium transition-all duration-200 ease-in-out ${
      isActive
        ? 'bg-indigo-50 text-indigo-700 shadow-sm'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 active:scale-95'
    }`;
  };

  return(
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Media Search
            </span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <Link className={getLinkClasses('/')} to={'/'}>Search</Link>
            <Link className={getLinkClasses('/collection')} to={'/collection'}>Collection</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}