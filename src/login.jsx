import Frame from './components/Frame'

function Login() {
  return (
    <Frame>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-10'>
          <p className='text-xl font-regular text-[#1a5d1a] text-center'>
            Entre com sua<br></br>conta!
          </p>
          <form method='POST'>
            <div className='w-[244px] h-[244px]'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2.5'>
                  <label htmlFor='email' className='text-xl font-light'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    className='w-[243px] border-b-[0.5px] border-black/75 pb-[5px] outline-none text-sm font-regular text-[#1a5d1a] placeholder:text-[#1a5d1a]/75'
                  />
                </div>
                <div className='flex flex-col gap-2.5'>
                  <label htmlFor='' className='text-xl font-light'>
                    Senha
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    className='w-[243px] border-b-[0.5px] border-black/75 pb-[5px] outline-none text-sm font-regular text-[#1a5d1a] placeholder:text-[#1a5d1a]/75'
                  />
                </div>
              </div>
              <p className='mt-[5px] text-sm font-medium text-[#1a5d1a] text-right'>
                Esqueceu sua senha?
              </p>
              <button
                type='submit'
                required
                className='w-[243px] h-[38px] rounded-md mt-[15px] bg-[#1ea81e] font-extrabold text-white drop-shadow-lg'
              >
                Entrar
              </button>
              <p className='text-sm font-medium mt-2.5 text-center'>
                Não possui uma conta?{' '}
                <span className='text-[#1a5d1a]'>Crie uma.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Frame>
  )
}

export default Login
