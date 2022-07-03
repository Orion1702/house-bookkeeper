import React, { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import DataService from './API/DataService';
import Loader from './components/UI/loader/loader';
import './App.css';
import DataList from './components/DataList';
import { usePosts } from './hooks/usePosts';
import DataFilter from './components/DataFilter';
import { dataConvert } from './hooks/converTableJson';
import { testData } from './API/testData';
import Header from './components/Header';
import { Container } from '@mui/material';

// import Container from '@material-ui/core/Container';


function App() {
  const [data, setData] = useState([]);
  const [dataTest, setDataTest] = useState(testData);
  const [filter, setFilter] = useState( {sort: '', query: ''})
  const sortedAndSearchedPosts = usePosts(data, filter.sort, filter.query)
  const [fetchData, isDataLoading, dataError] = useFetching( async () => {
    await DataService.getFromTable(setData)
  });

  useEffect(() => {
    console.log('useEffect');
    fetchData()
  }, []);

  const dataList = () => {
    console.log(data.slice(0,2))
    return data.slice(0,2)
  }

  return (
    <div className="App">
      <Header />
      {dataError &&
        <h1>Ошибка: ${dataError}</h1>
      }

      {isDataLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      }
      <Container sx={{mt: 2}}>
        <DataFilter 
          filter={filter}
          setFilter={setFilter}
        />
        <div>
        <h1>total mount</h1>
        <DataList posts={sortedAndSearchedPosts}/>
        
          {/* {data.filter(0,2).map(e => e.Name)} */}
        </div>
        </Container>
    </div>
  );
}

export default App;
