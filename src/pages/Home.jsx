import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

export default function Home() {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="min-h-screen bg-black-400 flex flex-col items-center pb-12">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
        
        
        {!query && (
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Discover Amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Media</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Search through a vast collection of high-quality photos and videos.
            </p>
          </div>
        )}

        <SearchBar />

  
        {query !== '' && (
          <div className="mt-8 w-full transition-all duration-500 ease-in-out">
            <div className="mb-8 flex justify-center">
              <Tabs />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[400px]">
              <ResultGrid />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}