import React from 'react'
import './home.css'
import Topflod from '../../components/topfold'
import ExpenseList from '../../components/expense-list'
const Home = () => {
  return (
    <div className='home'>
        <Topflod/>
        <ExpenseList/>
    </div>
  )
}

export default Home