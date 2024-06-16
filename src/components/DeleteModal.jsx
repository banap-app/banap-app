import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { customFetch } from '../utils/api'
import { useNavigate } from 'react-router-dom'

const DeleteModal = ({ visible, closeModal, fieldId }) => {
  const navigate = useNavigate()
  const [isModalVisible, setModalVisible] = useState(visible)

  async function deleteField() {
    try {
      const deleteField = await customFetch('/field/delete', 'DELETE', true, {
        fieldId,
      })
    } catch (error) {
      console.error('Error', error)
    } finally {
      navigate('/home')
    }
  }

  useEffect(() => {
    setModalVisible(visible)
  }, [visible])

  if (!isModalVisible) {
    return null
  }

  return (
    <div
      role='dialog'
      className='fixed inset-0 flex h-[full] w-[full] items-center justify-center bg-black bg-opacity-20'
    >
      <div className=' fixed flex h-[371px] w-[300px] flex-col items-center justify-center rounded-[10px] bg-white'>
        <div className='flex flex-col gap-[40px]'>
          <div className='flex w-[260px] flex-col items-center justify-center gap-[20px]'>
            <Trash2 color='#c4302b' />
            <p className='text-center text-base font-bold'>
              Tem certeza que deseja apagar o talhão?
            </p>
            <div className='w-[240px]'>
              <p className='text-justify text-sm font-medium'>
                Apagando o talhão, todas as informações relacionadas a ele
                também serão apagadas!
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <button
              onClick={() => deleteField()}
              className='h-[54px] w-[260px] rounded-[10px] bg-[#c4302b] text-base font-extrabold text-white'
            >
              Excluir
            </button>
            <button
              onClick={closeModal}
              className='h-[54px] w-[260px] rounded-[10px] bg-[#4e5876] bg-opacity-10 text-base font-medium'
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
