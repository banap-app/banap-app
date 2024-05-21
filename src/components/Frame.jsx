const Frame = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen overflow-auto flex items-center justify-center bg-zinc-300'>
        <div className='w-[390px] h-[844px] rounded-[45px] shadow-md bg-white'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Frame
