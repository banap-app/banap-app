import { ArrowLeft, BarChart, SquareCheckBig, TrendingUp } from 'lucide-react'
import {
  FieldIcon2,
  RegisterUpperLines,
  Banana,
  Troubleshoot,
} from '../assets/PagesAssets'
import FieldImage from '../assets/imgs/FieldImage.png'

const AnalysisPage = () => {
  return (
    <div className='relative flex h-[1990px] w-full flex-col items-center justify-center'>
      <div className='absolute left-[30px] top-[40px]'>
        <ArrowLeft />
      </div>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div className='absolute top-[104px] flex flex-col gap-[60px]'>
        <div className='flex flex-col gap-[40px]'>
          <div className='flex items-center justify-center gap-[10px]'>
            <TrendingUp color='#1a5d1a' />
            <p className='text-[28px] font-extrabold text-banap-dark'>
              Análise 01
            </p>
          </div>
          <div className='h-[320px] w-[330px] rounded-[10px] shadow-md'>
            <img
              src={FieldImage}
              className='w-[330px] rounded-[13px] shadow-md'
            />
            <div className='flex items-center justify-between p-[15px]'>
              <div className='flex items-center justify-center gap-[10px]'>
                <FieldIcon2 />
                <p className='text-base font-bold text-banap-light'>
                  Talhão 01
                </p>
              </div>
              <Banana />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[60px]'>
          <div className='flex w-[330px] flex-col items-center justify-center gap-[20px] '>
            <div className='flex w-[330px] items-center gap-[10px]'>
              <BarChart color='#1a5d1a' />
              <p className='text-[24px] font-semibold text-banap-dark'>
                Dados da análise
              </p>
            </div>
            <p className='font-regular text-justify text-base'>
              Temos dois tipos de cálculos feitos acerca dos dados
              disponibilizados. O de{' '}
              <span className='font-semibold text-banap-dark'>calagem</span>, e{' '}
              <span className='font-semibold text-banap-dark'>
                recomendação de adubação de solo.
              </span>
            </p>
          </div>
          <div className='flex w-[330px] flex-col items-center justify-center gap-[20px] '>
            <div className='flex w-[330px] items-center gap-[10px]'>
              <Troubleshoot />
              <p className='text-[24px] font-semibold text-banap-dark'>
                Dados da análise
              </p>
            </div>
            <p className='font-regular text-justify text-base text-banap-dark '>
              Esses são os dados que foram disponibilizados, por você, no
              momento em que a análise foi feita:
            </p>
          </div>
        </div>
        <div className='flex w-[330px] flex-col gap-[20px]'>
          <div className='flex justify-between'>
            <div className='flex h-[73px] w-[155px] flex-col justify-center rounded-[20px] bg-banap-light px-[20px] shadow-xl'>
              <p className='text-[20px] font-bold text-white'>S.B</p>
              <p className='font-regular text-[12px] text-white'>
                44 mmolc dm⁻³
              </p>
            </div>
            <div className='flex h-[73px] w-[155px] flex-col justify-center rounded-[20px] bg-banap-light px-[20px] shadow-xl'>
              <p className='text-[20px] font-bold text-white'>C.T.C</p>
              <p className='font-regular text-[12px] text-white'>
                83 mmolc dm⁻³
              </p>
            </div>
          </div>
          <div className='flex h-[83px] w-[330px] items-center justify-between rounded-[20px] bg-banap-light px-[25px] shadow-xl'>
            <div className='flex flex-col'>
              <p className='text-[20px] font-bold text-white'>P.R.N.T</p>
              <p className='text-[12px] font-medium text-white'>
                Em porcentagem
              </p>
            </div>
            <p className='text-base font-semibold text-white'>90%</p>
          </div>
          <p className='font-regular text-justify text-[12px] text-banap-dark'>
            * Saturação de base atual{' '}
            <span className='font-semibold'>(S.B)</span>, Capacidade de troca
            catiônica do solo <span className='font-semibold'>(C.T.C)</span> e
            Poder relativo de neutralização total do Calcário
            <span className='font-semibold'>(PRNT)</span>.
          </p>
          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[20px]'>
                <div className='flex w-[330px] flex-col items-center justify-center gap-[20px]'>
                  <div className='flex w-[330px] items-center gap-[10px]'>
                    <SquareCheckBig color='#1a5d1a' />
                    <p className='text-[23px] font-semibold text-banap-dark'>
                      Aplicação Recomendada
                    </p>
                  </div>
                  <p className='font-regular text-justify text-base text-banap-dark '>
                    Baseado nos cálculos feitos, a quantidade de calcário
                    necessária na aplicação do solo, para que se obtenha a
                    saturação de bases desejada, é de:
                  </p>
                </div>
              </div>
              <div className='flex h-[83px] w-[330px] items-center justify-between rounded-[20px] bg-banap-light px-[25px] shadow-xl'>
                <div className='flex flex-col'>
                  <p className='text-[20px] font-bold text-white'>Calcário</p>
                  <p className='text-[12px] font-medium text-white'>
                    Em kilogramas/hectare
                  </p>
                </div>
                <p className='text-[20px] font-semibold text-white'>
                  6.650kg/ha
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-[60px]'>
              <div className='flex w-[330px] flex-col items-center justify-center gap-[20px]'>
                <div className='flex w-[330px] items-center gap-[10px]'>
                  <Troubleshoot />
                  <p className='text-[23px] font-semibold text-banap-dark'>
                    Cálculo de Adubação
                  </p>
                </div>
                <p className='font-regular text-justify text-base text-banap-dark '>
                  Esses são os dados que foram disponibilizados, por você, no
                  momento em que a análise foi feita:
                </p>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between'>
                  <div className='flex h-[73px] w-[155px] flex-col justify-center rounded-[20px] bg-banap-light px-[20px] shadow-xl'>
                    <p className='text-[20px] font-bold text-white'>Fósforo</p>
                    <p className='font-regular text-[12px] text-white'>
                      15 mg dm⁻³
                    </p>
                  </div>
                  <div className='flex h-[73px] w-[155px] flex-col justify-center rounded-[20px] bg-banap-light px-[20px] shadow-xl'>
                    <p className='text-[20px] font-bold text-white'>Potássio</p>
                    <p className='font-regular text-[12px] text-white'>
                      83 mmolc dm⁻³
                    </p>
                  </div>
                </div>
                <div className='flex h-[83px] w-[330px] items-center justify-between rounded-[20px] bg-banap-light px-[25px] shadow-xl'>
                  <div className='flex flex-col'>
                    <p className='text-[20px] font-bold text-white'>P.E</p>
                    <p className='text-[12px] font-medium text-white'>
                      Produtividade esperada
                    </p>
                  </div>
                  <p className='text-[20px] font-extrabold text-white'>
                    50t/h⁻¹
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisPage
