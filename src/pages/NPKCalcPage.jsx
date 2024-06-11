import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines } from '../assets/PagesAssets'

const NPKCalcPage = () => {
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
      <div className='absolute top-[104px] flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-[330px]'>
            <p className='text-[28px] font-extrabold leading-9'>
              Cálculo de Recomendação de Adubação de<br></br>
              <span className='text-banap-dark'>Solo...</span>
            </p>
          </div>
          <div className='w-[330px]'>
            <p className='text-justify text-[15px] font-medium leading-5'>
              Precisamos que você nos informe o nível de nutrientes do seu solo!
              Depois, nos diga a produtividade que deseja obter...
            </p>
          </div>
        </div>
        <form>
          <div className='flex flex-col gap-[80px]'>
            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Fosfóro (P)
                </label>
                <input
                  type='text'
                  className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                />
              </div>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Potássio (K)
                </label>
                <input
                  type='text'
                  className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                />
              </div>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Produtividade esperada
                </label>
                <input
                  type='text'
                  className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                />
              </div>
            </div>
            <div className='flex w-[330px] items-center justify-center'>
              <button className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'>
                Calcular
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NPKCalcPage
