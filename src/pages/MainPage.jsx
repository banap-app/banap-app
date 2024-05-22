import { Lines } from '../assets/MainPageAssets'
import { Plus } from 'lucide-react'

const MainPage = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute top-[40px] flex w-[320px] flex-row items-center justify-between'>
        <p className='text-base font-bold'>
          Olá, <span className='text-[#1ea81e]'>Gilmar</span>
        </p>
        <div className='h-[40px] w-[40px] rounded-full bg-black'></div>
      </div>
      <div className='absolute top-[105px] z-10'>
        <Lines />
      </div>
      <div className='flex flex-col gap-10'>
        <p className='text-center text-base font-bold text-[#8c8c8c]'>
          Ainda não há uma<br></br>propriedade cadastrada
        </p>
        <button className='h-[56px] w-[220px] rounded-[10px] bg-[#1ea81e] text-base font-extrabold text-white'>
          <div className='flex items-center justify-between px-[15px]'>
            <Plus />
            Nova propriedade
          </div>
        </button>
      </div>
    </div>
  )
}

export default MainPage
