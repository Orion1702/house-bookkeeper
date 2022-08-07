import React, { useEffect, useState } from 'react';
import { useFetching } from './hooks/useFetching';
import DataService from './API/DataService';
import Loader from './components/UI/loader/loader';
import './App.css';
import DataContainer from './components/DataContainer';
import { usePosts } from './hooks/usePosts';
import DataFilter from './components/DataFilter';
import Header from './components/Header';
import { Container } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';
import { dateMinMax } from './hooks/utils/dateMinMax';


function App() {
  const [fetchData, isDataLoading, dataError] = useFetching( async () => {
    DataService.getFromTable((res) => {
      setData(res)
      setDataLength(res.length)
      console.log(res)
      console.log('dateMinMax(res)')
      console.log(dateMinMax(res))
    })
  });

  //redux
  const dispatch = useDispatch();
  // const reduxData = useSelector(state => state.data);
  const isLoading = useSelector(state => state.isLoading);
  // const dataParameters = useSelector(state => state.dataParameters);
  const defFilterDateStart = useSelector(state => state.filteredData.dateFrom);
  const defFilterDateEnd = useSelector(state => state.filteredData.dateTo);

  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [dataRange, setDataRange] = useState({minDate: '', maxDate: ''});


  const [filter, setFilter] = useState( {sort: '', query: '', dateFrom: defFilterDateStart, dateTo: defFilterDateEnd})
  const sortedAndSearchedPosts = usePosts(data, filter.sort, filter.query, filter.dateFrom, filter.dateTo)
  

  useEffect(() => {
    // console.log('useEffect');
    fetchData()

  }, []);

  useEffect(() => {
    dispatch({type: 'UPDATE_FILTEREDDATA', payload: filter})
  }, [filter.dateFrom, filter.dateTo]);

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
            <DataContainer posts={sortedAndSearchedPosts}/>
          }
        </Container>

        <Footer dataLength={dataLength}/>
    </div>
  );
}

export default App;
