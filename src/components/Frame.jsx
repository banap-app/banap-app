const Frame = ({ children }) => {
  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center overflow-auto bg-zinc-400'>
        <div className='h-[844px] w-[390px] rounded-[45px] bg-white'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Frame
