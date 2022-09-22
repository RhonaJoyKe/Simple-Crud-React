import React,{useState} from 'react'

function AddStudent({addStudent}) {
const [name, setName]=useState('')
const [course, setCourse]=useState('')


    const handleSubmit=(e)=>{
     e.preventDefault()
addStudent(name, course)
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
<input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
<br />
<input type="text" placeholder='Course' value={course} onChange={(e)=>setCourse(e.target.value)}/>
<br></br>
<input type="submit" value="submit" />
</form>
</div>
  )
}

export default AddStudent