import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { RegisterUpperLines, RegisterLowerLines } from '../assets/PagesAssets'
import { useState } from 'react'
import { customFetch } from '../utils/api'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await customFetch('/user/create', 'POST', false, {
        name,
        email,
        password,
        active: true,
      })

      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const response = await fetch('http://localhost:3000/user/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       active: true,
  //     }),
  //   })

  //   if (response.status === 200) {
  //     navigate('/login')
  //   } else {
  //     alert('Erro ao cadastrar')
  //   }
  // }

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute bottom-[40px]'>
        <RegisterLowerLines />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='mt-[40px] flex w-[330px] flex-col items-start justify-center gap-2.5'>
        <p className='text-left text-[28px] font-extrabold'>
          Olá, <span className='text-banap-light'>Produtor!</span>
          <br></br>Antes de tudo...
        </p>
        <p className='text-regular text-left text-base'>
          Um cadastro deve ser realizado!<br></br>Precisamos das suas
          informações,nos<br></br>diga seu...
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                onChange={(e) => setName(e.target.value)}
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
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                onChange={(e) => setEmail(e.target.value)}
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
                className='font-regular w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type='submit'
            className='z-10 mt-[148px] h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
