import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { RegisterUpperLines } from '../assets/PagesAssets'
import { useState } from 'react'

const FieldRegisterPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [firstCoordinate, setFirstCoordinate] = useState(0)
  const [secondCoordinate, setSecondCoordinate] = useState(0)
  const [thirdCoordinate, setThirdCoordinate] = useState(0)
  const [fourthCoordinate, setFourthCoordinate] = useState(0)
  const [description, setDescription] = useState('')
  const [cultureOfPlants, setCultureOfPlants] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/field/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        idProperty: id,
        name,
        photo: '',
        description,
        cultureOfPlants,
        firstCoordinate: Number(firstCoordinate),
        secondCoordinate: Number(secondCoordinate),
        thirdCoordinate: Number(thirdCoordinate),
        fourthCoordinate: Number(fourthCoordinate),
      }),
    })
    console.log(await response.json())
    if (response.status === 200) {
      navigate('/app')
    } else {
      alert('Erro ao cadastrar talhão.')
    }
  }

  let { id } = useParams()

  const [page, setPage] = useState(0)

  const handleClick = () => {
    setPage(page + 1)
  }

  if (page == 0) {
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              onClick={handleClick}
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
  if (page == 1) {
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
            <RegisterUpperLines />
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
                      onChange={(e) => setFirstCoordinate(e.target.value)}
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
                      onChange={(e) => setSecondCoordinate(e.target.value)}
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
                      onChange={(e) => setThirdCoordinate(e.target.value)}
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
                      onChange={(e) => setFourthCoordinate(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex w-[330px] items-center justify-center'>
                  <button
                    onClick={handleClick}
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
  if (page == 2) {
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
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='flex w-[330px] flex-col items-center justify-center  gap-[306px]'>
                <div className='flex flex-col gap-[15px]'>
                  <label className='text-2xl font-medium'>Cultura</label>
                  <select
                    onChange={(e) => setCultureOfPlants(e.target.value)}
                    className='h-[30px] w-[330px] rounded-[8px] bg-banap-light px-[8px] text-sm font-bold text-white outline-none'
                  >
                    <option
                      value='Banana Prata'
                      className='bg-white text-black'
                    >
                      Banana Prata
                    </option>
                    <option
                      value='Banana da Terra'
                      className='bg-white text-black'
                    >
                      Banana da Terra
                    </option>
                  </select>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
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
}

export default FieldRegisterPage
