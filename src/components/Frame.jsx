const Frame = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen overflow-auto flex items-center justify-center bg-zinc-400'>
        <div className='w-[390px] h-[844px] rounded-[45px] shadow-2xl bg-white'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Frame
