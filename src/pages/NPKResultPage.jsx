import { ArrowLeft } from 'lucide-react'
import { NPKResultImage, RegisterUpperLines } from '../assets/PagesAssets'

const NPKResultPage = () => {
  return (
    <div className='relative flex h-[1054px] w-full flex-col items-center justify-center'>
      <div className='absolute left-[30px] top-[40px]'>
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute top-[104px] flex flex-col'>
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
                  550kg/h
                </p>
              </div>
            </div>
            <div className=' h-[85px] w-[125px] rounded-[10px] bg-banap-light shadow-lg'>
              <p className='m-[7px] flex justify-center text-[20px] font-extrabold text-white'>
                Fosfóro
              </p>
              <div className='bottom-[0px] flex h-[47px] w-[125px] items-center justify-center rounded-[10px] border-white bg-white'>
                <p className='text-center text-[24px] font-extrabold text-banap-light'>
                  110kg/h
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
                  260kg/h
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

export default NPKResultPage
