import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines, RegisterLowerLines } from '../assets/PagesAssets'
import { useState } from 'react'

const PropertyRegister = () => {
  const navigate = useNavigate()
  const [propertyName, setPropertyName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authrization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        propertyName,
      }),
    })
    if (response.status === 201) {
      navigate('/app')
    } else {
      alert('Erro ao cadastrar')
    }
  }

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
        className='absolute left-[30px] top-[30px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute top-[104px] flex w-[330px] flex-col gap-2.5'>
        <p className='text-3xl font-extrabold'>
          Cadastrando sua<br></br>
          <span className='text-banap-dark'>propriedade...</span>
        </p>
        <p className='font-regular text-base'>
          O primeiro passo a ser feito é cadastrar<br></br>sua propriedade...
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
              className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default PropertyRegister
