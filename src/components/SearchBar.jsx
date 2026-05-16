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
    <div>
      <form
        onSubmit={(e) => {
          handelSubmited(e);
        }}
        className="flex gap-5 p-10 bg-gray-800"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className=" w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything......"
        />
        <button
          className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer
        active:scale-95"
        >
          search
        </button>
      </form>
    </div>
  );
}
