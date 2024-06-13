import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines, ResultCalcImage } from '../assets/PagesAssets'
import { useNavigate } from 'react-router-dom'

const LimingResultPage = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute left-[64px] top-[312px]'>
        <ResultCalcImage />
      </div>
      <div className='absolute top-[104px] flex w-[330px] flex-col gap-[10px]'>
        <p className='text-[28px] font-extrabold'>
          Cálculo de Calagem<br></br>do{' '}
          <span className='text-banap-light'>Solo...</span>
        </p>
        <p className='text-justify font-medium'>
          Esse é o resultado do cálculo de calagem que foi feito baseado nas
          informações disponibilzadas por você
        </p>
      </div>
      <div className='absolute bottom-[60px] flex w-[330px] flex-col items-center justify-center gap-[87px]'>
        <div className=' h-[85px] w-[148px] rounded-[10px] bg-banap-light shadow-lg'>
          <p className='m-[7px] flex justify-center text-[20px] font-extrabold text-white'>
            Calcário
          </p>
          <div className='bottom-[0px] flex h-[47px] w-[148px] items-center justify-center rounded-[10px] border-white bg-white'>
            <p className='text-center text-[24px] font-extrabold text-banap-light'>
              6.550kg/h
            </p>
          </div>
        </div>
        <button className='h-[38px] w-[243px] rounded-[5px] bg-banap-light text-sm font-extrabold text-white'>
          Registrar cálculo
        </button>
      </div>
    </div>
  )
}

export default LimingResultPage