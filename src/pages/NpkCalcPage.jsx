import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines } from '../assets/PagesAssets'
import { useState } from 'react'
import { customFetch } from '../utils/api'

const NpkCalcPage = () => {
  const navigate = useNavigate()
  const [phospor, setPhospor] = useState(0)
  const [potassium, setPotassium] = useState(0)
  const [expectedProductivity, setExpectedProductivity] = useState(51)
  const { state } = useLocation()
  const data = state.data

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = customFetch('/analysis/create', 'POST', true, {
        ...data, isCalculateNpk: true, phospor, potassium, expectedProductivity
      })
    }
    catch (error){

    }
  }
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute top-[104px] flex flex-col gap-[40px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-[330px]'>
            <p className='text-[28px] font-extrabold leading-9'>
              Cálculo de Recomendação de Adubação de<br></br>
              <span className='text-banap-dark'>Solo...</span>
            </p>
          </div>
          <div className='w-[330px]'>
            <p className='text-justify text-[15px] font-medium leading-5'>
              Precisamos que você nos informe o nível de nutrientes do seu solo!
              Depois, nos diga a produtividade que deseja obter...
            </p>
          </div>
        </div>
        <form>
          <div className='flex flex-col gap-[80px]'>
            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Fosfóro (P)
                </label>
                <input
                  type='text'
                  className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  onChange={(e) => setPhospor(e.target.value)} />
              </div>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Potássio (K)
                </label>
                <input
                  type='text'
                  className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                  onChange={(e) => setPotassium(e.target.value)} />
              </div>
              <div className='flex flex-col gap-[22px]'>
                <label htmlFor='' className='text-lg font-medium'>
                  Produtividade esperada
                </label>
                <select onChange={(e) => setExpectedProductivity(e.target.value)} className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'>
                  <option value='19' >Menor que 20%</option>
                  <option value='21'>Entre 20% e 30%</option>
                  <option value='39'>Entre 30% e 40%</option>
                  <option value='49' >Entre 40% e 50%</option>
                  <option value='51'>Maior que 50%</option>
                </select>
              </div>
            </div>
            <div className='flex w-[330px] items-center justify-center'>
              <button className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'>
                Calcular
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NpkCalcPage
