import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 text-white shadow-md flex items-center" style={{fontFamily: "Ginto"}}>
          Dashboard
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
          <p className="text-white">Friends</p>
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col"></div>
    </>
  );
}