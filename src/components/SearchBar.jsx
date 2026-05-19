import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
export default function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handelSubmited = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText("");
  };
  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 mt-8 mb-4">
      <form
        onSubmit={handelSubmited}
        className="relative flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full bg-white border border-gray-100 p-2 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:shadow-lg transition-all duration-300 ease-out"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-400 ml-4 flex-shrink-0" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full px-4 py-3 text-lg text-gray-700 bg-transparent border-none outline-none focus:ring-0 placeholder-gray-400"
          type="text"
          placeholder="Search for amazing media..."
        />
        <button
          type="submit"
          className="px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-md hover:opacity-95 active:scale-95 transition-all duration-200 flex-shrink-0"
        >
          Search
        </button>
      </form>
    </div>
  );
}
