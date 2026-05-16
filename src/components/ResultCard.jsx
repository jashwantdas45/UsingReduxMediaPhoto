import { useDispatch } from "react-redux"
import { addCollection, addedToToast } from "../redux/features/collectionSlice"

export default function ResultCard({item}){
      const dispatch = useDispatch()
const addToCollection=(item)=>{
         dispatch(addCollection(item))
         dispatch(addedToToast())
  }

  return(
    <div className="w-[37vh] h-80 relative bg-white rounded-xl overflow-hidden">
       
      <a target="_blank" href={item.url} className="w-full">
      {item.type=='photo'?<img className="h-full w-full object-cover object-center" src={item.thumbnail} alt="" />:''}
      {item.type=='video'?<video className="h-full w-full object-cover object-center" src={item.src}  autoPlay muted loop></video>:''}
    </a>
      <div id="bottom" className="flex justify-between gap-2 items-center w-full px-4 py-6   text-white absolute bottom-0">
        <h6 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h6>
        <button onClick={
          ()=>{
            addToCollection(item)
          }
        }
        className="active:scale-95 cursor-pointer bg-indigo-600 text-white rounded-xl px-3 py-2 font-medium">
          Save
        </button>
      </div>
    </div>
  ) 

}