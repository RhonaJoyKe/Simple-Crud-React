import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {
const [student,setStudent]=useState([])

useEffect(()=>{
fetch('http://localhost:3000/data').then(res=>res.json())
.then(data=>{
  setStudent(data)
})
},[])
const addStudent=(name, course)=>{
// console.log(name, course)
fetch('http://localhost:3000/data',{method:"POST",headers:{
'content-type':'application/json',
'accept':'application/json'
},body:JSON.stringify({name,course})
}).then(res=>res.json()).then(data=>console.log(data))
}
  return (
 <>
 <h3>Student List</h3>
 <StudentList   students={student} />
 <AddStudent addStudent={addStudent}/>
 </>
    
  );
}

export default App;
