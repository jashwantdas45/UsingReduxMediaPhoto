import { Link } from "react-router-dom";

export default function NavBar(){
  return(
    <div className="flex justify-between  p-5 bg-blue-900 text-2xl font-semibold">Media Search
            <div className="flex gap-6 text-xl">
          <Link className="text-black bg-white rounded px-4 py-2 active:scale-95" to={'/'}>Search</Link>
          <Link className="text-black bg-white rounded px-4 py-2 active:scale-95" to={'collection'}>Collection</Link>
          </div>
          </div>
  )
}