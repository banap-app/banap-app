import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines } from '../assets/PagesAssets'

const FieldRegisterPage3 = () => {
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
      <div className='absolute bottom-[60px] flex flex-col gap-[40px]'>
        <div className='flex w-[330px] items-center'>
          <p className='text-3xl font-extrabold'>
            Cadastrando seu<br></br>
            <span className='text-banap-dark'>Talhão...</span>
          </p>
        </div>
        <form>
          <div className='flex w-[330px] flex-col items-center justify-center gap-[40px]'>
            <div className='relative flex flex-col gap-[15px]'>
              <label htmlFor='field-name' className='text-2xl font-medium'>
                Descrição
              </label>
              <textarea
                name='field-name'
                id='field-name'
                placeholder='Digite o nome do
              seu talhão'
                autoComplete='name'
                required
                className='h-[60px]
              w-[330px] resize-none border-b border-black/30 pb-[5px]
              text-sm text-banap-dark outline-none placeholder:text-banap-dark'
              ></textarea>
            </div>
            <div className='flex w-[330px] flex-col items-center justify-center  gap-[306px]'>
              <div className='flex flex-col gap-[15px]'>
                <label className='text-2xl font-medium'>Cultura</label>
                <select
                  name=''
                  id=''
                  className='h-[30px] w-[330px] rounded-[8px] bg-banap-light px-[8px] text-sm font-bold text-white outline-none'
                >
                  <option value='' className='bg-white text-black'>
                    Banana Prata
                  </option>
                  <option value='' className='bg-white text-black'>
                    Banana da Terra
                  </option>
                </select>
              </div>
              <button
                type='submit'
                className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FieldRegisterPage3
