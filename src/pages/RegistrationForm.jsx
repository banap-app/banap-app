import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { UpperLines, LowerLines } from '../assets/RegistrationAssets'

const RegisterPage = () => {
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
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='mt-[40px] flex w-[330px] flex-col items-start justify-center gap-2.5'>
        <p className='text-left text-[28px] font-extrabold'>
          Olá, <span className='text-[#1ea81e]'>Produtor!</span>
          <br></br>Antes de tudo...
        </p>
        <p className='text-regular text-left text-base'>
          Um cadastro deve ser realizado!<br></br>Precisamos das suas
          informações,nos<br></br>diga seu...
        </p>
      </div>
      <form>
        <div className='mt-10 flex h-[482px] w-[330px] flex-col items-center justify-center'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2.5'>
              <label htmlFor='name' className='text-2xl font-medium'>
                Nome
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Insira o seu nome'
                autoComplete='name'
                required
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-[#1a5d1a] outline-none placeholder:text-[#1a5d1a]'
              />
            </div>
            <div className='flex flex-col gap-2.5'>
              <label htmlFor='email' className='text-2xl font-medium'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Insira o seu email'
                autoComplete='email'
                required
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-[#1a5d1a] outline-none placeholder:text-[#1a5d1a]'
              />
            </div>
            <div className='flex flex-col gap-2.5'>
              <label htmlFor='password' className='text-2xl font-medium'>
                Senha
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Insira a sua senha'
                autoComplete='new-password'
                required
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-[#1a5d1a] outline-none placeholder:text-[#1a5d1a]'
              />
            </div>
          </div>
          <button
            type='submit'
            className='z-10 mt-[148px] h-[38px] w-[243px] rounded-md bg-[#1ea81e] text-sm font-extrabold text-white'
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
