
import { useEffect, useState } from "react";


function StudentForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollNo,setRollNo] = useState(props.rollNoValue);
    
    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailvalue);
        setRollNo(props.rollNoValue);
    }, [props.namevalue,props.emailValue,props.rollNoValue]);

    const arr = [name,email,rollNo];  //[Raj,raj@gmail.com,1]
    //Data available in the child component needs to transferred to parent component
    //Callback function
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
            <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your roll number" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default StudentForm;



