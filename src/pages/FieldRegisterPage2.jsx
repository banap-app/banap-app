import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines } from '../assets/PagesAssets'

const FieldRegisterPage2 = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='flex w-[330px] flex-col items-center justify-center'>
        <div
          onClick={() => navigate(-1)}
          className='absolute left-[30px] top-[40px]'
        >
          <ArrowLeft />
        </div>
        <div className='absolute left-[5px] top-[17px]'>
          <UpperLines />
        </div>
        <div className='absolute bottom-[60px] flex flex-col gap-[40px]'>
          <p className='text-3xl font-extrabold'>
            Cadastrando seu<br></br>
            <span className='text-banap-dark'>Talhão...</span>
          </p>
          <form>
            <div className='flex flex-col gap-[118px]'>
              <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-[15px]'>
                  <label htmlFor='point-1' className='text-2xl font-medium'>
                    Ponto 1
                  </label>
                  <input
                    type='text'
                    name='point-1'
                    id='point-1'
                    placeholder='Digite o primeiro ponto'
                    required
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  />
                </div>
                <div className='flex flex-col gap-[15px]'>
                  <label htmlFor='point-2' className='text-2xl font-medium'>
                    Ponto 2
                  </label>
                  <input
                    type='text'
                    name='point-2'
                    id='point-2'
                    placeholder='Digite o segundo ponto'
                    required
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  />
                </div>
                <div className='flex flex-col gap-[15px]'>
                  <label htmlFor='point-3' className='text-2xl font-medium'>
                    Ponto 3
                  </label>
                  <input
                    type='text'
                    name='point-3'
                    id='point-3'
                    placeholder='Digite o terceiro ponto'
                    required
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  />
                </div>
                <div className='flex flex-col gap-[15px]'>
                  <label htmlFor='point-4' className='text-2xl font-medium'>
                    Ponto 4
                  </label>
                  <input
                    type='text'
                    name='point-4'
                    id='point-4'
                    placeholder='Digite o quarto ponto'
                    required
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  />
                </div>
              </div>
              <div className='flex w-[330px] items-center justify-center'>
                <button
                  type='submit'
                  className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
                >
                  Continuar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FieldRegisterPage2
