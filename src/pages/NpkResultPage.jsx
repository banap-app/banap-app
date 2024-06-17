import { ArrowLeft } from 'lucide-react'
import { NPKResultImage, RegisterUpperLines } from '../assets/PagesAssets'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'

const NpkResultPage = () => {
  const {state} = useLocation()
  const navigate = useNavigate()
  
  async function handle() {
    toast.success('Sucesso na sua análise!', {
      duration: 5000,
      position: 'top-center',
      classNames: {
        toast: 'bg-white',
        title: 'text-green-700',
        actionButton: 'bg-green-700',
        description: 'text-green-700',
        cancelButton: 'bg-orange-400',
        closeButton: 'bg-lime-400',
        success: 'text-green-700',
      },
    })
    setTimeout(()=> {
      navigate(`/field/${state.idField}`)
    }, 6000)
  }

  useEffect(()=>{
    handle()
  }, [state])
  return (
    <div className='relative flex h-[1080px] w-full flex-col items-center justify-center'>
      <Toaster />
      <div className='absolute left-[30px] top-[40px]'>
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute top-[104px] flex flex-col gap-[70px]'>
        <div className='flex flex-col gap-[43px]'>
          <div className='flex w-[330px] flex-col items-center justify-center gap-[70px]'>
            <div className='flex flex-col gap-[10px]'>
              <div className='w-[330px]'>
                <p className='text-[28px] font-extrabold '>
                  Cálculo de Recomendação de Adubação de<br></br>
                  <span className='leading-9 text-banap-dark'>Solo...</span>
                </p>
              </div>
              <div className='w-[330px]'>
                <p className='text-justify font-medium leading-5'>
                  Esse é o resultado do cálculo. A quantidade de nitrogênio,
                  fosfóro e potássio que nós recomendamos que seja aplicado ao
                  solo, é de:
                </p>
              </div>
            </div>
            <div>
              <NPKResultImage />
            </div>
          </div>
          <div className='flex w-[330px] justify-between'>
            <div className=' h-[85px] w-[125px] rounded-[10px] bg-banap-light shadow-lg'>
              <p className='m-[7px] flex justify-center text-[20px] font-extrabold text-white'>
                Potássio
              </p>
              <div className='bottom-[0px] flex h-[47px] w-[125px] items-center justify-center rounded-[10px] border-white bg-white'>
                <p className='text-center text-[24px] font-extrabold text-banap-light'>
                  {state.potassium}kg/h
                </p>
              </div>
            </div>
            <div className=' h-[85px] w-[125px] rounded-[10px] bg-banap-light shadow-lg'>
              <p className='m-[7px] flex justify-center text-[20px] font-extrabold text-white'>
                Fosfóro
              </p>
              <div className='bottom-[0px] flex h-[47px] w-[125px] items-center justify-center rounded-[10px] border-white bg-white'>
                <p className='text-center text-[24px] font-extrabold text-banap-light'>
                  {state.phosphor}kg/h
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-[330px] flex-col items-center'>
            <div className=' h-[85px] w-[134px] rounded-[10px] bg-banap-light shadow-lg'>
              <p className='m-[7px] flex justify-center text-[20px] font-extrabold text-white'>
                Nitrogênio
              </p>
              <div className='bottom-[0px] flex h-[47px] w-[134] items-center justify-center rounded-[10px] border-white bg-white'>
                <p className='text-center text-[24px] font-extrabold text-banap-light'>
                  {state.nitrogen}kg/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[330px] items-center justify-center'>
          <button className='h-[38px] w-[243px] rounded-[5px] bg-banap-light text-sm font-extrabold text-white'>
            Registrar cálculo
          </button>
        </div>
      </div>
    </div>
  )
}

export default NpkResultPage
