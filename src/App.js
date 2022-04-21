import "./App.css";

export default function App() {
  return (
    <div className='flex text-gray-100 h-screen' style={{fontFamily: "Whitney"}}>
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
          <div className="bg-gray-700 text-gray-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand">
            <DiscordIcon className="h-5 w-7"/>
          </div>

        {/* {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))} */}
        
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 text-white shadow-md flex items-center" style={{fontFamily: "Ginto"}}>
          Tailwind CSS
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
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

function DiscordIcon(props) {
  return (
    <svg
      viewBox="0 -28.5 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216.856 16.597A208.502 208.502 0 00164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0079.735 175.3a136.413 136.413 0 01-21.846-10.632 108.636 108.636 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 005.355 4.237 136.07 136.07 0 01-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"
      />
    </svg>
  )
}