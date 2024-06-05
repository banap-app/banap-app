import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import {
  LoginUpperLines,
  LoginLowerLines,
  LoginUpperBubbles,
  LoginLowerBubbles,
} from '../assets/PagesAssets'
import { useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    const responseHttp = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const response = await responseHttp.json()
    
    
    if (responseHttp.status === 200) {
      localStorage.setItem('token', response.token)
      navigate('/app')
    } else {
      alert('Usuário ou senha incorretos')
    }
  }

  return (
    <div className='relative flex h-full w-full flex-col items-center'>
      <div className='absolute right-0 top-[-4px]'>
        <LoginUpperLines />
      </div>
      <div className='absolute bottom-0 left-0'>
        <LoginLowerLines />
      </div>
      <div className='absolute right-[7px] top-[158px]'>
        <LoginUpperBubbles />
      </div>
      <div className='absolute bottom-[222px] left-[46px]'>
        <LoginLowerBubbles />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='mt-[140px] flex flex-col items-center gap-10'>
        <div className='flex flex-col gap-10'>
          <p className='text-center text-[32px] font-extrabold text-banap-dark'>
            Banap
          </p>
          <p className='font-regular text-center text-xl text-banap-dark'>
            Entre com sua<br></br>conta!
          </p>
        </div>
        <form onSubmit={e => handleSubmit(e)}>
          <div className='h-auto w-[244px]'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='email' className='text-xl font-light'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Insira o seu email'
                  autoComplete='email'
                  required
                  className='font-regular w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark/75'
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='password' className='text-xl font-light'>
                  Senha
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Insira a sua senha'
                  autoComplete='current-password'
                  required
                  className='font-regular w-[243px] border-b-[1px] border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark/75'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <p className='mt-[5px] text-right text-sm font-medium text-banap-dark'>
              Esqueceu sua senha?
            </p>
            <button
              type='submit'
              className='mt-[15px] h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
            >
              Entrar
            </button>
            <p className='mt-2.5 text-center text-sm font-medium'>
              Não possui uma conta?{' '}
              <Link to='/register'>
                <span className='text-banap-dark'>Crie uma.</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
