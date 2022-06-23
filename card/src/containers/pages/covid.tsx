import React, {useContext, useEffect, useState, useCallback} from 'react';
import './covid.css';
import { Context } from '../../context/dataStore';
import Card from '../../components/card';
import Button from '../../components/button';


const Covid:React.FC = ()=> {
  const {covid_data, getCovidData} = useContext(Context);
  const [contry, setContry] = useState<string>('');
  const [response, setResponse] = useState<Array<object>>([]);
  const [showMoreData, setShowMoreData] = useState<Array<object>>([]);
  

  useEffect (()=>{
    const onLoad= () => {
      if(getCovidData){
        getCovidData();
      }
    }
    onLoad();
  }, []);
  useEffect(() =>{
    if(covid_data && covid_data.length >0){
      const{country, provinces}= covid_data[0];
      setContry(country?country: '');
      setResponse(provinces?provinces:[]);
      setShowMoreData(provinces?provinces.slice(0,3):[])
    }
  }, [covid_data]);
  const showMore = useCallback(()=>{
    setShowMoreData([...showMoreData, ...response.slice(showMoreData.length, showMoreData.length+3)]);
  },[showMoreData, response])

  return (
    <main className="container">
      <h1>Hello world - welcome{contry}</h1>
      <section>
        <div  className='container_card'>
          <Card data={showMoreData}/>  
        </div>
        <div>
          <Button text='Show More' id='covidButton' action={showMore}/>
        </div>
      </section>
      
    </main>
  );
}

export default Covid;



