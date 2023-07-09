import React, { useState } from 'react'

export const About = () => {
    const [fname, setFname ] = useState('');
    console.log("🚀 ~ file: About.js:5 ~ About ~ fname:", fname)

    const handleSubmit = (e) => {
        console.log('dhfskjahkf==============11111111');
        e.preventDefault();
        if(fname.length === 0) {
            console.log('in the if ==============>');
            alert('Name should be required !');
        }
    }


    return (
        <>
            <div>
                This is About component.
                <p>
                    React.js is an open-source JavaScript library that is used
                    for building user interfaces specifically for single-page applications.
                    It’s used for handling the view layer for web and mobile apps. React
                    also allows us to create reusable UI components. React was first created
                    by Jordan Walke, a software engineer working for Facebook. React first deployed
                    on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.React allows
                    developers to create large web applications that can change data, without
                    reloading the page. The main purpose of React is to be fast, scalable, and
                    simple. It works only on user interfaces in the application. This corresponds
                    to the view in the MVC template. It ca

                </p>
            </div>
            <div className='Input_field'>
                <h1> Showing Four Input field which use to validate the form ?</h1>

                <form className='form'>
                        <label htmlFor="fname"> First Name </label>
                        <input type="text" className='fname' value= {fname} 
                            onChange={(e) => setFname( prev => e.target.value)}/>
                        {/* <label htmlFor="lname"> Last Name </label>
                        <input type="text" className='lname' />
                        <label htmlFor="email"> Email </label>
                        <input type="email" className='email' />
                        <label htmlFor="password"> Password </label>
                        <input type="password" className='password' /> */}
                       <button type = "submit" onClick={handleSubmit}> Login </button>
                </form>
            </div>
        </>
    )
}
