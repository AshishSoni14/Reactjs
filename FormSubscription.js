import React,{useState} from 'react'
import './FormSubscription.css'

const FormSubscription=(events)=> {
  const[form,setForm]=  useState({
  userTitle:'',userDate:'',userAmount:''
  })

const titleChangeHandler=(events)=>{
  setForm((prevState)=>{
    return {...prevState,userTitle:events.target.value}
  })
  console.log(form);
}
const dateChangeHandler=(events)=>{
  setForm((prevState)=>{
    return {...prevState,userDate:events.target.value}
  })
  console.log(form);
}
const amountChangeHandler=(events)=>{
  setForm((prevState)=>{
    return {...prevState,userAmount:events.target.value}
  })
  console.log(form);
}
const submitHandler=(events)=>{
  events.priventDefault()
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new_subscription_controls">
        <div className="new_subscription_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new_subscription_control">
          <label>Date</label>
          <input type="date" min="" max=""  onChange={dateChangeHandler}></input>
        </div>
        <div className="new_subscription_control">
          <label>Amount</label>
          <input type="text" min="10"  onChange={amountChangeHandler}></input>
        </div>
        </div>
        <div className="new_subscription_actions">
          <button type="submit">Add Subscription</button>
        </div>
      </form>
    </div>
  )
}
export default  FormSubscription;