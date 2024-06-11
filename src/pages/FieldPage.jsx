import { useNavigate } from 'react-router-dom'
import {
  RegisterUpperLines,
  FieldIcon,
  PlantIcon,
  Troubleshoot,
} from '../assets/PagesAssets'
import { ArrowLeft, Trash2, Pen, Plus, FileText } from 'lucide-react'
import DeleteModal from '../components/DeleteModal'
import { useState } from 'react'

const FieldPage = () => {
  const navigate = useNavigate()

  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div className='relative flex h-[1140px] w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div
        onClick={() => navigate(-1)}
        className='absolute left-[30px] top-[40px]'
      >
        <ArrowLeft />
      </div>
      <div className='absolute top-[104px] flex flex-col gap-[66px]'>
        <div className='flex flex-col gap-[40px]'>
          <div className='flex items-center justify-center gap-[10px]'>
            <FieldIcon />
            <p className='text-[28px] font-extrabold text-banap-dark'>
              Talhão 01
            </p>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='h-[320px] w-[330px] rounded-[10px] shadow-md'>
              <div className='h-[270px] w-[330px] rounded-[10px] bg-slate-400 shadow-md'></div>
              <div className='flex items-center gap-[10px] p-[15px]'>
                <PlantIcon />
                <p className='text-base font-bold text-banap-light'>
                  Banana nanica
                </p>
              </div>
            </div>
            <div className='flex w-[330px] items-center justify-between'>
              <button className='flex h-[51px] w-[174px] items-center justify-center gap-[10px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
                <Pen />
                Editar Talhão
              </button>
              <button
                onClick={openModal}
                className='flex h-[51px] w-[51px] items-center justify-center rounded-[10px] bg-[#c4302b] text-white'
              >
                <Trash2 />
              </button>
            </div>
          </div>
          <div className='flex w-[330px] flex-col gap-[20px]'>
            <div className='flex items-center gap-[10px]'>
              <FileText color='#1a5d1a' />
              <p className='text-[24px] font-semibold text-banap-dark'>
                Descrição
              </p>
            </div>
            <p className='font-regular text-justify text-base'>
              Esse talhão fica perto da cerca ao leste da fazenda, ao lado de
              outros talhões de banana prata.
            </p>
          </div>
          <div className='flex w-[330px] flex-col gap-[5px]'>
            <div className='flex items-center gap-[10px]'>
              <Troubleshoot />
              <p className='text-[24px] font-semibold text-banap-dark'>
                Ultimas análises
              </p>
            </div>
            <p className='font-regular text-justify text-base text-banap-dark'>
              Listadas abaixo estão as ultímas 5 análises feitas nesse talhão!
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <div className='w-[330px]'>
            <p className='text-center text-base font-bold text-[#8c8c8c]'>
              Você ainda não<br></br>realizou nenhuma análise
            </p>
          </div>
          <div className='flex w-[330px] items-center justify-center'>
            <button className='flex h-[56px] w-[177px] items-center justify-center gap-[10px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
              <Plus />
              Nova Análise
            </button>
          </div>
        </div>
      </div>
      <DeleteModal visible={isModalVisible} closeModal={closeModal} />
    </div>
  )
}

export default FieldPage
