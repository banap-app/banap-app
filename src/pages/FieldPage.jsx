import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  RegisterUpperLines,
  FieldIcon,
  PlantIcon,
  Troubleshoot,
  AnalysisIcons,
} from '../assets/PagesAssets'
import { ArrowLeft, Trash2, Pen, Plus, FileText, RotateCw } from 'lucide-react'
import DeleteModal from '../components/DeleteModal'
import { useEffect, useState } from 'react'
import { customFetch } from '../utils/api'
import FieldImage from '../assets/imgs/FieldImage.png'

const FieldPage = () => {
  const HoverComponent = () => {
    const [showIcon, setShowIcon] = useState(false)
    console.log(showIcon)
    return (
      <div className='group relative'>
        <img
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
          className='h-full w-full rounded-[12px] transition-all group-hover:brightness-75'
          src={FieldImage}
        />
        {showIcon && (
          <div
            onMouseEnter={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
            className='absolute right-[140px] top-[115px]'
          >
            <RotateCw size='48px' strokeWidth='2px' color='white' />
          </div>
        )}
      </div>
    )
  }

  let { id } = useParams()

  const navigate = useNavigate()

  const [isModalVisible, setModalVisible] = useState(false)
  const [fieldData, setFieldData] = useState([])
  const [analysisData, setAnalysisData] = useState([])

  async function fetchField() {
    try {
      const fieldData = await customFetch(`/field/getField/${id}`, 'GET', true)
      setFieldData(fieldData.field)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  async function fetchAnalysis() {
    try {
      const analysisData = await customFetch(
        `/analysis/allAnalysis`,
        'POST',
        true,
        {
          idField: id,
        }
      )
      setAnalysisData(analysisData.analysis)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  useEffect(() => {
    fetchField()
    fetchAnalysis()
  }, [])

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  console.log(analysisData)

  return (
    <div className='relative flex h-[1200px] w-full flex-col items-center justify-center'>
      <div className='absolute left-[5px] top-[17px]'>
        <RegisterUpperLines />
      </div>
      <div
        onClick={() => navigate('/home')}
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
              <HoverComponent />
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
            <div className='w-[330px] text-wrap'>
              <p className='font-regular text-justify text-base'>
                {fieldData.description}
              </p>
            </div>
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
        {analysisData !== null && analysisData.length !== 0 ? (
          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col items-end justify-center gap-[40px]'>
              {analysisData.map((analysis, index) => (
                <div
                  key={analysis.uuid}
                  className='flex h-[117px] w-[290px] items-center justify-between rounded-[30px] bg-banap-light px-[30px]'
                >
                  <div className='flex flex-col'>
                    <p className='font-regular text-[20px] text-white'>
                      Análise
                    </p>
                    <p className='text-[28px] font-extrabold text-white'>
                      Análise {index + 1}
                    </p>
                  </div>
                  <AnalysisIcons />
                </div>
              ))}
            </div>
            <div className='flex w-[330px] items-center justify-end'>
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
        ) : (
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
        )}
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
