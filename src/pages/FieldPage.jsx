import { useNavigate } from 'react-router-dom'
import {
  RegisterUpperLines,
  FieldIcon,
  PlantIcon,
  FieldImage,
} from '../assets/PagesAssets'
import { ArrowLeft, Trash2, Pen, Plus } from 'lucide-react'

const FieldPage = () => {
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
      <div className='absolute top-[104px] flex flex-col gap-[40px]'>
        <div className='flex items-center justify-center gap-[10px]'>
          <FieldIcon />
          <p className='text-[28px] font-extrabold text-banap-dark'>
            Talhão 01
          </p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <div className='h-[320px] w-[330px] rounded-[10px] shadow-md'>
            {/* bg-[url("./assets/imgs/FieldImage.png")] */}
            <div className='h-[270px] w-[330px] rounded-[10px] bg-slate-400 shadow-md'></div>
            <div className='flex items-center gap-[10px] p-[15px]'>
              <PlantIcon />
              <p className='text-base font-bold text-banap-light'>
                Banana nanica
              </p>
            </div>
          </div>
          <div className='flex w-[330px] items-center justify-between'>
            <button className='flex h-[51px] w-[174px] items-center justify-center gap-[10px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
              <Pen />
              Editar Talhão
            </button>
            <button className='flex h-[51px] w-[51px] items-center justify-center rounded-[10px] bg-[#c4302b] text-white'>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
      <button className='absolute bottom-[60px] flex h-[56px] w-[177px] items-center justify-center gap-[10px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
        <Plus />
        Nova Análise
      </button>
    </div>
  )
}

export default FieldPage
