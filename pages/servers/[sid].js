import {useRouter} from "next/router";

export default function Server1() {
    let router = useRouter()
    return (
        <>
        <div className="bg-gray-800 w-60 flex flex-col">
            <div className="px-3 h-12 text-white shadow-md flex items-center" style={{fontFamily: "Ginto"}}>
            Server {router.query.sid}
            </div>
            <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
            <p className="text-white">general</p>
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
        </>
    )
}