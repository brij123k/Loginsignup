import React from 'react'

const Sign = () => {
  return (
    <div className='sign_container'>
        <form>
            <div className='Sign_in'>
                <h1 className='Sign_name'>Sign In</h1>
            </div>
            <div className='Login_start'>
                <input placeholder='Name' type='text'/>
            </div>
            <div className='Login_start'>
                <input placeholder='Number' type='text'/>
            </div>
            <div className='Login_start'>
                <input placeholder='Email' type='text'/>
            </div>
            <div className='Login_start'>
                <input placeholder='Set_Password' type='text'/>
            </div>
            <div className='Login_start'>
                <input placeholder='Confirm_Password' type='text'/>
            </div>
        </form>
    </div>
  )
}

export default Sign
