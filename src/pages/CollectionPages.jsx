import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice";

export default function CollectionPage() {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {collection.length > 0 ? 'Your Collection' : 'Collection Empty'}
            </h1>
            {collection.length > 0 && (
              <p className="text-gray-500 mt-2">You have {collection.length} item(s) saved.</p>
            )}
          </div>
          
          {collection.length > 0 && (
            <button
              onClick={clearAll}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-red-500 border border-transparent rounded-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Collection
            </button>
          )}
        </div>

        {/* Empty State vs Grid View */}
        {collection.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No saved media yet</h3>
            <p className="text-gray-500 text-center max-w-sm">
              Search for photos or videos and add them to your collection to see them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collection.map((item, inx) => (
              <div key={inx} className="transform transition duration-300 hover:-translate-y-1">
                <CollectionCard item={item} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}