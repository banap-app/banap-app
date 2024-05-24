import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { UpperLines } from '../assets/RegistrationAssets'

const FieldRegisterPage1 = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <UpperLines />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute top-[104px] flex w-[330px] items-center'>
        <p className='text-3xl font-extrabold'>
          Cadastrando seu<br></br>
          <span className='text-banap-dark'>Talhão...</span>
        </p>
      </div>
      <form>
        <div className='absolute bottom-[60px] left-[30px] flex w-[330px] flex-col items-center justify-center gap-[453px]'>
          <div className='flex flex-col gap-[15px]'>
            <label htmlFor='field-name' className='text-2xl font-medium'>
              Identificação
            </label>
            <input
              type='text'
              name='field-name'
              id='field-name'
              placeholder='Digite o nome do seu talhão'
              autoComplete='name'
              required
              className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
            />
          </div>
          <button
            type='submit'
            className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FieldRegisterPage1
