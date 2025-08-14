import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login, logout} from './store/authSlice';
import { Outlet } from 'react-router-dom';
import { Header,Footer } from './components/index';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData})) //method ko name nhi diya as wha pe bhi userdata hi name h
      }else{
        dispatch(logout()) //if user nhi mila to bhi state update ki logout h
      }
    })
    .finally(() => setLoading(false)) //hmesha chlta h finally
  }, [])

return !loading ? (
  <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
          <h1>hii</h1>
    <div className='w-full block'>

      <Header />
      {/* <main>
        <Outlet />
      </main> */}
      <Footer />
    </div>

  </div>
) : ("loading...")
}

export default App
