import { Outlet } from 'react-router-dom'

const Frame = () => {
  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center bg-zinc-400'>
        <div className='no-scrollbar h-[844px] w-[390px] overflow-y-auto overflow-x-hidden rounded-[45px] bg-white'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Frame
