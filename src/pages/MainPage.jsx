import { useNavigate } from 'react-router-dom'
import { MainPageLines } from '../assets/PagesAssets'
import { ChevronRight, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

const MainPage = () => {
  const [dataResponse, setDataResponse] = useState([])
  const [loading, isLoading] = useState(false)
  const navigate = useNavigate()

  async function fetchData() {
    isLoading(true)
    const response = await fetch(
      'http://localhost:3000/property/allProperties',
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      }
    )

    const data = await response.json()
    console.log(data.property[0])

    setDataResponse(() => data.property)
    isLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute top-[40px] flex w-[320px] flex-row items-center justify-between'>
        <p className='text-base font-bold'>
          Olá, <span className='text-banap-light'>Gilmar</span>
        </p>
        <div className='h-[40px] w-[40px] rounded-full bg-black'></div>
      </div>
      <div className='absolute top-[105px] z-10'>
        <MainPageLines />
      </div>
      {!loading ? (
        <div className='flex w-[330px] flex-col gap-[60px]'>
          {dataResponse.map((item) => (
            <>
              <div className='flex flex-col gap-[35px]'>
                <div className='flex items-center justify-between'>
                  <p
                    key={item._id}
                    className='text-[28px] font-extrabold text-banap-dark'
                  >
                    {item.name}
                  </p>
                  <ChevronRight color='#1a5d1a' />
                </div>
                <div className='flex gap-[25px]'>
                  <div className='flex h-[178px] w-[124px] items-center justify-center rounded-[15px] bg-[#d9d9d9]'>
                    <Plus color='#bdbdbd' size={'50px'} />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className='flex flex-col gap-10'>
          <p className='text-center text-base font-bold text-[#8c8c8c]'>
            Ainda não há uma<br></br>propriedade cadastrada
          </p>
          <button className='h-[56px] w-[220px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
            <div className='flex items-center justify-between px-[15px]'>
              <Plus />
              Nova Propriedade
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default MainPage
