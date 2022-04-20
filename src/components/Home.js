import profileImg from '../imgs/bird-pic.jpg';

export default function Home() {
    return (
      
      <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
        <div className='max-w-lg'>
          <div className='flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
            <img 
              className="w-10 h-10 rounded-full mr-4" 
              src={profileImg} 
              alt="bird"
            />
            <div>
              <p className='flex items-baseline'>
                <span className='text-green-500 mr-2 text-sm font-medium'>birdperson</span>
                <span className='text-xs text-gray-500'>01/15/2021</span>
              </p>
              <p className='text-gray-300'>
                The quick brown fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log.
              </p>
            </div>
          </div>
          <div className='mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
            <p className='text-gray-300 pl-14'>
              The quick brown fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log.
            </p>
          </div>
          <div className='mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
            <p className='text-gray-300 pl-14'>
              The quick brown fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log. The quick fox jumped over the thick brown log.
            </p>
          </div>
        </div>
      </div>
    );
  }
  