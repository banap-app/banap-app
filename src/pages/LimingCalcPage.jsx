import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines } from '../assets/PagesAssets'
import { useState } from 'react'
import { customFetch } from '../utils/api'

const LimingCalcPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const [CTC, setCTC] = useState()
  const [PRNT, setPRNT] = useState()
  const [currentBaseSaturation, setCurrentBaseSaturation] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let data = {
        currentBaseSaturation: Number(currentBaseSaturation),
        totalCationExchangeCapacity: Number(CTC),
        relativeTotalNeutralizingPower: Number(PRNT),
        desiredBaseSaturation: 70,
        idField: state.idField,
      }
      const response = await customFetch('/analysis/create', 'POST', true, data)
      console.log(await response)

      if (response.success) {
        data.liming = response.analysis.liming
        navigate('/analysis/liming/result', {
          state: { success: response.success, data: data },
        })
      }
    } catch (e) {
      console.error(e)
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
      <div className='absolute bottom-[60px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-[330px]'>
            <p className='text-[28px] font-extrabold'>
              Cálculo de Calagem<br></br>do{' '}
              <span className='text-banap-dark'>Solo...</span>
            </p>
          </div>
          <div className='w-[330px]'>
            <p className='text-justify font-medium'>
              Método conhecido para calcular a quantidade de calcário necessária
              a ser aplicada no solo, com o objetivo de corrigir a acidez e
              alcançar a saturação desejada de bases.
            </p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='flex flex-col gap-[129px]'>
              <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-[22px]'>
                  <label className='text-lg font-medium'>
                    Saturação de bases atual (V%)
                  </label>
                  <input
                    type='text'
                    placeholder='exemplo%'
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                    onChange={(e) => setCurrentBaseSaturation(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-[22px]'>
                  <label className='text-lg font-medium'>CTC</label>
                  <input
                    type='text'
                    placeholder='exemplo'
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                    onChange={(e) => setCTC(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-[22px]'>
                  <label className='text-lg font-medium'>PRNT em %</label>
                  <input
                    type='text'
                    placeholder='exemplo%'
                    className='w-[330px] border-b border-black/30 pb-[5px] text-sm text-banap-dark outline-none placeholder:text-banap-dark'
                    onChange={(e) => setPRNT(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex w-[330px] items-center justify-center'>
                <button
                  type='submit'
                  className='h-[38px] w-[243px] rounded-md bg-banap-light text-sm font-extrabold text-white'
                >
                  Calcular
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LimingCalcPage
