import "./App.css";

export default function App() {
  return (
    <div className='flex text-gray-100 h-screen' style={{fontFamily: "Whitney"}}>
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 shadow-md flex items-center">
          Tailwind CSS
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2">
          <p className="text-white">channel (unread)</p>
          <p className="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
      <div className="px-3 h-12 flex items-center shadow-md">general</div>
        <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p>Message {i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          ))}
        </div>
      </div>
    </div>
  );
}
