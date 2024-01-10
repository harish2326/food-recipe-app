import { useState } from 'react';
import Input from './Input';
import List from './List';
import Nav from './Nav';
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import dish from './api/dish';
import Header from './Header';
import DishDetails from './DishDetails';


function App() {
  // const API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5f55743f0cef4915b3b07d71b94a86cf';
  const [cuisionReq, setCuisionReq] = useState('');
  const [queryReq, setQueryReq] = useState('');
  const [ingredientsReq, setIngredientsReq] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [dishDetails,setDishDetails] = useState([]);
  


  
  const navigate = useNavigate(); 

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch(`${API_URL}&cuisine=${cuisionReq}&query=${queryReq}&ingredients=${ingredientsReq}`);
      // const data = await response.json();
      // console.log('Fetched data:', data);
      const data=await dish.get(`recipes/complexSearch`,{
      
        params:{
          apiKey:"5f55743f0cef4915b3b07d71b94a86cf",
          cuisine:cuisionReq,
          query:queryReq,
          ingredients:ingredientsReq
          
        }
      })
      
      setItems(data.data.results);
      setCuisionReq("")
      setQueryReq("")
      setIngredientsReq("")
      navigate('/list');
    } catch (err) {
      console.log(err.message)
    }finally{
      setTimeout(()=> setIsLoading(false),2000)
    }
  };

  return (
    <>
      <Header
        title="food suggestion"
      />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Input
              cuisionReq={cuisionReq}
              setCuisionReq={setCuisionReq}
              queryReq={queryReq}
              setQueryReq={setQueryReq}
              ingredientsReq={ingredientsReq}
              setIngredientsReq={setIngredientsReq}
              fetchItems={fetchItems}
            />
          }
        />       
        <Route path="/list" >
          <Route index element={
          <List 
            items={items}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />}/> 
        <Route path=':id' element={
        <DishDetails
          // dishDetails={dishDetails}
          // setDishDetails={setDishDetails}
        />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
