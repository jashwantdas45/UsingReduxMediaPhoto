import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/collectionCard"
import { clearCollection } from "../redux/features/collectionSlice";

export default function CollectionPage(){
    const collection = useSelector(state=>state.collection.items)
    const dispatch = useDispatch();
    const clearAll=()=>{
      dispatch(clearCollection())
    }

  return(
    <div className="overflow-auto px-10 py-6 h-screen">

      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-medium">{collection.length>0?'Your Collection':'Collection Empty'}</h1>
        <button 
        onClick={
          ()=>{
            clearAll()
          }
        }
        className="active:scale-95 rounded bg-red-600 px-5 py-2 cursor-pointer text-base font-medium transtion">Clear-Collection</button>
      </div>

      <div className="flex flex-wrap gap-5 justify-start  ">
      {
        collection.map((item,inx)=>{
          return <div key={inx}>
         <CollectionCard item={item}/>
          </div>
        })
      }
    </div>
    </div>
  )
}