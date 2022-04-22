import * as Icons from "../../components/icons"
import data from "../../data.json"

export default function Server() {
    
    return (
        <>
        <div className="bg-gray-800 w-60 flex flex-col">
            <button className="px-3 h-12 text-white shadow-sm flex items-center font-title text-base-[15px] hover:bg-gray-550/[0.16] transition">
                <div className="relative w-4 h-4 mr-1">
                    <Icons.VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
                    <Icons.CheckIcon className="absolute w-4 h-4" />
                </div>
                Tailwind CSS
                <Icons.ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
            </button>

            <div className="text-gray-300 flex-1 overflow-y-scroll font-medium pt-3 space-y-[21px]">
                
                {data['1'].categories.map(category => (
                    <div key={category.id}>
                        {category.label && (
                            <button className="flex items-center px-0.5 text-xs font-title uppercase tracking-wide">
                                <Icons.ArrowIcon className="w-3 h-3 mr-0.5"/>
                                {category.label}
                            </button>
                        )}
                    

                    <div className="space-y-0.5 mt-[5px]">
                        {category.channels.map((channel) => (
                            <ChannelLink channel={channel} key={channel.id}/>
                        ))}
                </div>
                </div>
                ))}

                
            </div>
        </div>
        <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm">general</div>
            <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
            {[...Array(40)].map((_, i) => (
                <p>Message {i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            ))}
            </div>
        </div>
        </>
    );
}

function ChannelLink({channel}) {
    // let Icon = channel.icon ? Icons[channel.icon] : Icons.HashtagIcon;
    return (
        <a
            key={channel.id}
            href="#"
            className="flex items-center text-gray-300 px-2 mx-2 py-1 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
        >
            <Icons.HashtagIcon className="w-5 h-5 mr-1.5 text-gray-400"/>
            {channel.label}
            <Icons.AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100"/>
        </a>
    )
}