import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

export default function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmitted = (e) => {
    e.preventDefault();
    if(text.trim() === '') return;
    dispatch(setQuery(text));
    setText("");
  };

  const popularTags = ["Nature", "Cyberpunk", "Architecture", "Minimal", "Space"];

  const handleTagClick = (tag) => {
    dispatch(setQuery(tag));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 mt-12 mb-8">
      <form
        onSubmit={handleSubmitted}
        className="group relative flex items-center rounded-full bg-[#1A1F2C]/80 backdrop-blur-xl border border-white/10 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all duration-500 ease-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-7 w-7 text-indigo-400 ml-5 flex-shrink-0 transition-transform duration-300 group-focus-within:scale-110" 
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
          className="relative z-10 w-full px-5 py-4 text-xl text-slate-200 bg-transparent border-none outline-none focus:ring-0 placeholder-slate-500/80 font-light"
          type="text"
          placeholder="Search for amazing media..."
        />
        
        <button
          type="submit"
          className="relative z-10 px-8 py-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex-shrink-0 overflow-hidden"
        >
          <span className="relative z-10">Search</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <span className="text-slate-400 text-sm font-medium mr-2 tracking-wider uppercase">Popular:</span>
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="px-4 py-1.5 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
