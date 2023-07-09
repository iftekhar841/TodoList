import React from 'react'
import { FirstName, LastName }  from '../App'

const ComC = () => {
    return (
    <>
        <FirstName.Consumer>  
            {(fname)=> {
            return (
                <LastName.Consumer>
                    {(lname)=> {
                       return (
                        <h3>
                            This is react hook using ...{fname} and {lname}
                        </h3>
                        );
                    }}
                </LastName.Consumer>
            )  
        }}
       </FirstName.Consumer>         
    </>
    )
}
export default ComC;