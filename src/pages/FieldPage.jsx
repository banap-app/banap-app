import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  RegisterUpperLines,
  FieldIcon,
  PlantIcon,
  Troubleshoot,
} from '../assets/PagesAssets'
import { ArrowLeft, Trash2, Pen, Plus, FileText, RotateCw } from 'lucide-react'
import DeleteModal from '../components/DeleteModal'
import { useEffect, useState } from 'react'
import { customFetch } from '../utils/api'
import FieldImage from '../assets/imgs/FieldImage.png'

const FieldPage = () => {
  let { id } = useParams()

  const navigate = useNavigate()

  const [isModalVisible, setModalVisible] = useState(false)
  const [fieldData, setFieldData] = useState([])

  async function fetchField() {
    try {
      const fieldData = await customFetch(`/field/getField/${id}`, 'GET', true)
      setFieldData(fieldData.field)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  useEffect(() => {
    fetchField()
  }, [])

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
              {fieldData.name}
            </p>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div className='relative h-[320px] w-[330px] rounded-[10px] shadow-md'>
              <img
                src={FieldImage}
                className='w-[330px] rounded-[13px] shadow-md'
              />
              <button
                onClick={() => console.log('rotate')}
                className='absolute right-[10px] top-[10px] opacity-0 hover:opacity-100'
              >
                <RotateCw strokeWidth='2px' color='white' />
              </button>
              <div className='flex items-center gap-[10px] p-[15px]'>
                <PlantIcon />
                <p className='text-base font-bold text-banap-light'>
                  {fieldData.cultureOfPlants}
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
              {fieldData.description}
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
            <Link
              to={'/analysis/liming/calc'}
              state={{ idField: fieldData._id }}
              className='flex h-[56px] w-[177px] items-center justify-center gap-[10px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'
            >
              <Plus />
              Nova Análise
            </Link>
          </div>
        </div>
      </div>
      <DeleteModal
        visible={isModalVisible}
        closeModal={closeModal}
        fieldId={fieldData._id}
      />
    </div>
  )
}

export default FieldPage
