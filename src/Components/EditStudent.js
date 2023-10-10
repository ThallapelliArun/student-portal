import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, editStudent } from '../Redux/action'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditStudent() {

    const {id} =useParams()

    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const studentsData=useSelector(state=>state.add)

    const filterdData=studentsData.filter(val=>{
        return val.id==id
    })

    const [inputData,setInputData]=useState(filterdData[0])

    const changeHandler = (e) =>{
      let {name, value} = e

      if(name=="batch"){
        value= parseInt(value)
      }else if(name=="age"){
        value=parseInt(value)
      }
       
      setInputData({...inputData, [name]: value } )
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(editStudent(inputData))
        navigate("/")
    }

    // value={inputData.name} 
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <form onSubmit={(e) => submit(e)} className="w-50">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={inputData.name} aria-describedby="emailHelp" onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" name= "age" value={inputData.age} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={inputData.email} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Batch</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" name="batch" aria-describedby="emailHelp" value={inputData.batch} onChange={(e) => changeHandler(e.target)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
  
        </div>

    )
}
