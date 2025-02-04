import React, { useState } from 'react'

const Checkbox = ({ college }) => {

    return (
        <>
            <h1>college name : {college.name}</h1>
            <ul>
                <li>
                    <h3>City : {college.city}</h3>
                </li>
                <li>

                    {
                        college.students.map((students, index) => (
                            <div key={index} >
                                <h6>{students.name}</h6>
                            </div>
                        ))
                    }
                </li>
            </ul>
        </>
    )
}

export default Checkbox