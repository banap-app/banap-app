import { useNavigate } from 'react-router-dom'
import { RegisterUpperLines } from '../assets/PagesAssets'
import { ArrowLeft, Home, Plus } from 'lucide-react'

const Property = () => {
  const navigate = useNavigate()
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute top-[104px] flex items-center justify-between gap-[10px]'>
        <Home color='#1a5d1a' strokeWidth={3} />
        <p className='text-[28px] font-extrabold text-banap-dark'>
          Propriedade 01
        </p>
      </div>
      <div className='flex flex-col gap-10'>
        <p className='text-center text-base font-bold text-[#8c8c8c]'>
          Ainda não há um<br></br>talhão cadastrado
        </p>
        <button className='h-[56px] w-[172px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
          <div className='flex items-center justify-between px-[15px]'>
            <Plus />
            Novo Talhão
          </div>
        </button>
      </div>
    </div>
  )
}

export default Property
