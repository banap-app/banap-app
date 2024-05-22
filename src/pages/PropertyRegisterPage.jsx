import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { UpperLines, LowerLines } from '../assets/RegistrationAssets'

const PropertyRegister = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <UpperLines />
      </div>
      <div className='absolute bottom-[40px]'>
        <LowerLines />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[30px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute top-[104px] flex flex-col gap-2.5'>
        <p className='text-left text-3xl font-extrabold'>
          Cadastrando sua<br></br>
          <span className='text-banap-dark'>propriedade...</span>
        </p>
        <p className='font-regular text-left text-base'>
          O primeiro passo a ser feito é cadastrar<br></br>sua propriedade...
        </p>
      </div>
      <form>
        <div className='absolute right-[30px] top-[275px] flex flex-col items-center justify-center gap-[380px]'>
          <div className='flex flex-col gap-[15px]'>
            <label htmlFor='property-name' className='text-2xl font-medium'>
              Nome da propriedade
            </label>
            <input
              type='text'
              name='property-name'
              id='property-name'
              placeholder='Insira o nome da propriedade'
              autoComplete='name'
              required
              className='text-banap-dark placeholder:text-banap-dark w-[330px] border-b border-black/30 pb-[5px] text-sm outline-none'
            />
          </div>
          <button
            type='submit'
            className='bg-banap-light h-[38px] w-[243px] rounded-md text-sm font-extrabold text-white'
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default PropertyRegister
