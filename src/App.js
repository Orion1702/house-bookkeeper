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

import { useDispatch, useSelector } from 'react-redux';

// import Container from '@material-ui/core/Container';


function App() {
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.data);
  const isLoading = useSelector(state => state.isLoading);
  const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
  const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);

  const [data, setData] = useState([]);
  // const [dataTest, setDataTest] = useState(testData);
  // const [filter, setFilter] = useState( {sort: '', query: '', dateFrom: '2022,7,3', dateTo: '2022,7,4'})
  const [filter, setFilter] = useState( {sort: '', query: '', dateFrom: defFilterDateStart, dateTo: defFilterDateEnd})
  const sortedAndSearchedPosts = usePosts(data, filter.sort, filter.query, filter.dateFrom, filter.dateTo)
  const [fetchData, isDataLoading, dataError] = useFetching( async () => {
    await DataService.getFromTable(setData)
  });

  useEffect(() => {
    console.log('useEffect');
    fetchData()
  }, []);

  useEffect(() => {
    dispatch({type: 'UPDATE_FILTEREDDATA', payload: sortedAndSearchedPosts})
  }, [sortedAndSearchedPosts]);

  // const dataList = () => {
  //   console.log(data.slice(0,2))
  //   return data.slice(0,2)
  // }

  return (
    <div className="App">
      <Header />
      {dataError &&
        <h1>Ошибка: ${dataError}</h1>
      }
      
      <Container sx={{mt: 2}} maxWidth="md">
        <DataFilter 
          filter={filter}
          setFilter={setFilter}
        />
        {isLoading ?
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
          :
          <DataList posts={sortedAndSearchedPosts}/>
        }
        </Container>
    </div>
  );
}

export default App;
