import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

export default function Tabs() {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-20 p-10">
      {tabs.map((elem, inx) => {
        return (
          <button
            key={inx}
            className={`${
              activeTab === elem ? "bg-blue-700" : "bg-gray-600"
            } cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}