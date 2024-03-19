import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)

  const [listUser, setListUser] = useState([])
  const fetchAllUsers = async () => {
    const response = await axios.get('http://localhost:8080/users/all')
    const data = response.data
    setListUser(data)
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with Gau Gau</h1>
        <div className='btn-actions'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <div>Count = {count}</div> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {listUser && listUser.length > 0 && listUser.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
