import React from 'react'

export const Application = () => {
  return (
    <>
    <h1>Job Application Form</h1>
    <h2>Section 1</h2>
    <p>All Fielads are mandatory</p>
    <span title='close'>X</span>
    <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
    <div data-testid='custom-element'>
        Custom HTML Elemnt
    </div>
    <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value='priya' onChange={()=>{}} placeholder='FullName'/>
            
        </div>
        <div>
            <label htmlFor='bio'>Bio</label>
           <textarea id='bio' name='bio'/>
            
        </div>
        <div>
        <label htmlFor='job-location'>Name</label>
        <select id='job-location'>
            <option value="">Select One</option>
            <option value="IND">India</option>
            <option value="US">United states</option>
            <option value="UK">United Kingdom</option>
            
            </select>
        </div>
        <div>
            <label>
            <input type='checkbox' id='terms'/>I agree to the terms and conditions


            </label>
            
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

