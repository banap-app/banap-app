import { ArrowLeft } from 'lucide-react'
import { RegisterUpperLines, ResultNPKImage } from '../assets/PagesAssets'

const NPKResultPage = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center overflow-auto'>
      <div className='absolute left-[30px] top-[40px]'>
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className=''>
        <ResultNPKImage />
      </div>
      <div className='flex flex-col gap-[10px]'>
        <div className='w-[330px]'>
          <p className='text-[28px] font-extrabold '>
            Cálculo de Recomendação de Adubação de<br></br>
            <span className='leading-9 text-banap-dark'>Solo...</span>
          </p>
        </div>
        <div className='w-[330px]'>
          <p className='text-justify font-medium leading-5'>
            Esse é o resultado do cálculo. A quantidade de nitrogênio, fosfóro e
            potássio que nós recomendamos que seja aplicado ao solo, é de:
          </p>
        </div>
      </div>
    </div>
  )
}

export default NPKResultPage
