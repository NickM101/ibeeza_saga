import './App.css';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './saga/userReducer';
import UserTable from './containers/UserTable';
import InputForm from './containers/FormDialog';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const user = useSelector((state) => state.users);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {user ? <UserTable data={user}/> : <h1>No records available</h1>}
        </div>
      </header>
    </div>
  );
}

export default App;
