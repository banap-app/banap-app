import Frame from '../components/Frame'

function Register() {
  return (
    <Frame>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-[330px] flex flex-col items-start justify-center gap-2.5'>
          <p className='text-[28px] font-extrabold text-left'>
            Olá, <span className='text-[#1ea81e]'>Produtor!</span>
            <br></br>Antes de tudo...
          </p>
          <p className='text-base text-regular text-left'>
            Um cadastro deve ser realizado!<br></br>Precisamos das suas
            informações,nos<br></br>diga seu...
          </p>
        </div>
        <form>
          <div className='w-[330px] h-[482px] flex flex-col items-center justify-center mt-10'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='name' className='text-2xl font-medium'>
                  Nome
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='name'
                  required
                  className='w-[330px] border-b border-black/30 pb-[5px] outline-none text-sm font-regular text-[#1a5d1a] placeholder:text-[#1a5d1a]'
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
                  autoComplete='email'
                  required
                  className='w-[330px] border-b border-black/30 pb-[5px] outline-none text-sm font-regular text-[#1a5d1a] placeholder:text-[#1a5d1a]'
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
                  autoComplete='new-password'
                  required
                  className='w-[330px] border-b border-black/30 pb-[5px] outline-none text-sm font-regular text-[#1a5d1a] placeholder:text-[#1a5d1a]'
                />
              </div>
            </div>
            <button
              type='submit'
              className='w-[243px] h-[38px] rounded-md mt-[148px] bg-[#1ea81e] font-extrabold text-white'
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </Frame>
  )
}

export default Register
