import React from 'react'

const Input = ({cuisionReq,setCuisionReq,queryReq,setQueryReq,ingredientsReq,setIngredientsReq,fetchItems}) => {
  return (
    <>
    <div className="inputValues">
        <div className="container">
        <label htmlFor="cuisionReq">Enter Your Cuision :</label>
        <input
            id="cuisionReq" 
            type="text" 
            required
            value={cuisionReq}
            onChange={(e)=>setCuisionReq(e.target.value)}
        /><br />
        <label htmlFor="queryReq">Enter Your Query :</label> 
        <input
            id="queryReq" 
            type="text" 
            required
            value={queryReq}
            onChange={(e)=>setQueryReq(e.target.value)}
        /><br />
        <label htmlFor="ingredientsReq">Enter Your Ingredients :</label>
        <input
            id="ingredientsReq" 
            type="text" 
            required
            value={ingredientsReq}
            onChange={(e)=>setIngredientsReq(e.target.value)}
        />
        <button onClick={ ()=>fetchItems()} type='submit'>submit</button>
          </div>
        </div>
    </>
  )
}

export default Input