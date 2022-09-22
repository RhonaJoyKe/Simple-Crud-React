import React from 'react'
import Student from './Student'
function StudentList({students}) {
// const {student}=props
// console.log(student)

  return (<>
   {students.map(std=> <Student  key={std.id}  {...std}  />)}
  </>
  )
}

export default StudentList