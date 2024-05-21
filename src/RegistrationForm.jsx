import Frame from './components/Frame'

function Register() {
  return (
    <Frame>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <form>
          <div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </Frame>
  )
}

export default Register
