import { useNavigate, Link } from 'react-router-dom'
import { LeaveIcon, MainPageLines } from '../assets/PagesAssets'
import { Bell, ChevronRight, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { customFetch } from '../utils/api'

const ProfileDropdown = ({ isOpen, setIsOpen }) => {
  return (
    <div
      role='menu'
      aria-orientation='vertical'
      aria-labelledby='user-menu-button'
      className={`absolute right-[0px] top-[50px] z-20 flex h-[56px] w-[153px] items-center justify-center rounded-[12px] border bg-white ${!isOpen && 'hidden'}`}
    >
      <button
        role='menuitem'
        className='h-[40px] w-[136px] rounded-[9px] border-none bg-[#121212] bg-opacity-15'
      >
        <div className='flex items-center gap-[20px] px-[12px]'>
          <LeaveIcon />
          <p className='text-base font-semibold text-[#2c2c2c]'>Sair</p>
        </div>
      </button>
    </div>
  )
}

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [propertyData, setPropertyData] = useState([])
  const [userName, setUserName] = useState('Usuário')
  const [loading, isLoading] = useState(false)
  const navigate = useNavigate()

  async function fetchData() {
    isLoading(true)

    try {
      const propertyData = await customFetch('/property/allProperties', 'GET')
      console.log('Fetched data: ', propertyData.property)
      setPropertyData(propertyData.property)

      const userData = await customFetch('/user/get', 'GET')
      console.log('Fetched data: ', userData.name)
      setUserName(userData.name)
    } catch (error) {
      console.error('Error fetching data', error)
    } finally {
      isLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div className='absolute top-[40px] flex w-[320px] flex-row items-center justify-between'>
        <p className='text-base font-bold'>
          Olá, <span className='text-banap-light'>{userName}</span>
        </p>
        <div className='flex items-center justify-center gap-[27px]'>
          <Bell />
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className='h-[40px] w-[40px] rounded-full bg-black'></div>
          </button>
          <ProfileDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className='absolute top-[105px] z-10'>
        <MainPageLines />
      </div>
      {loading ? (
        <div className='absolute top-[150px] flex w-[330px] flex-col gap-[60px]'>
          {propertyData.map((item) => (
            <div key={item._id} className='flex flex-col gap-[35px]'>
              <div className='flex items-center justify-between'>
                <p className='text-[28px] font-extrabold text-banap-dark'>
                  {item.name}
                </p>
                <ChevronRight color='#1a5d1a' />
              </div>
              <div className='flex gap-[25px]'>
                <Link to={`/field/register/${item._id}`}>
                  <div className='flex h-[178px] w-[124px] items-center justify-center rounded-[15px] bg-[#d9d9d9]'>
                    <Plus color='#bdbdbd' size={'50px'} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col gap-10'>
          <p className='text-center text-base font-bold text-[#8c8c8c]'>
            Ainda não há uma<br></br>propriedade cadastrada
          </p>
          <Link to={'/property/create'}>
            <button className='h-[56px] w-[220px] rounded-[10px] bg-banap-light text-base font-extrabold text-white'>
              <div className='flex items-center justify-between px-[15px]'>
                <Plus />
                Nova Propriedade
              </div>
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default HomePage
