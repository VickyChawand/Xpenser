import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './topflod.css';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';

const Topflod = () => {
    const[query, setQuery]= useState("")
    const dispatch=useDispatch()
    const handleQuery=(e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
  return (
    <div className='topfold'>
        {
            window.location.pathname ==='/' ? (<div className='home-topfold'>
            <div className='searchbar'>
                <i class="fi fi-rr-search"></i>
                <input placeholder='Search for expeses'  value={query} onChange={(e)=> handleQuery(e)} />
            </div>
            <Link to="/add-expense">
            <div className='add-button'>
                <i class="fi fi-rr-add"></i>
                <label>Add</label>
            </div>
            </Link>
            </div>): (
            <div className='add-topfold'>
                <Link to="/">
                <div className='add-topfold-button'>
                <i class="fi fi-br-angle-left"></i>
                <label>Back</label>
                </div>
                </Link>
                <Link to="/">
                <div className='add-topfold-button'>
                <i class="fi fi-rr-cross-circle"></i>
                <label>Cancel</label>
                </div>
                </Link>
            </div>
            )}
    </div>
  );
};

export default Topflod