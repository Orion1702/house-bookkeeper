import React, { useEffect, useState } from 'react';
import DataService from './API/DataService';
import './App.css';
import Loader from './components/UI/loader/loader';

import { useFetching } from './hooks/useFetching';

function App() {
  const [data, setData] = useState();
  const [fetchData, isDataLoading, dataError] = useFetching( async () => {
    DataService.getFromTable(setData)
  });

  useEffect(() => {
    console.log('useEffect');
    fetchData()

  }, []);

  return (
    <div className="App">
      {dataError &&
        <h1>Ошибка: ${dataError}</h1>
      }

      {isDataLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      }
    </div>
  );
}

export default App;
