import React from 'react'

const Tabledata = (prop) => {
  return (
    <div className='container bg-secondary  py-4'>
    <table className='w-100    border text-center'>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>text</th>

        </tr>
        {
prop.printdata.map((elem )=>{
    return(
        <tr>
            <td>{elem.name}</td>
            <td>{elem.email}</td>
            <td>{elem.text}</td>

        </tr>

    )
})
        }
    </table>


    </div>
  )
}

export default Tabledata