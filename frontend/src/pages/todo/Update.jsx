import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Update = ({display , update}) => {

  useEffect(() => {
    setInputs({title: update.title,
      body: update.body,
    })
  }, [update])
  
    const [Inputs, setInputs] = useState(
      {title: "",
        body: "",
      }
    );
     const change = (e) =>{
    const {name , value} = e.target;
    setInputs({...Inputs, [name]:value});
     };
const submit = async () =>{
 await axios.put(`${window.location.origin}/api/v2/updateTask/${update._id}`,Inputs).then((response)=>{
  toast.success(response.data.message);
 });
  display("none");
}
  return (
    <div className='text-black bg-green-200 w-full h-[570px] fixed'>
        <div className='md:pl-20 pl-4 pt-16 flex flex-col md:w-[800px] w-[350px] '>
          <h1 className='text-2xl font-bold'>Update Your Task</h1>
          <input
                      
                        name='title'
                        type="text"
                        placeholder='TITLE'
                        value={Inputs.title}
                        onChange={change}
                        className='border-none my-2 md:w-100 py-2 px-2 text-xl rounded outline-none focus:ring-2 ring-green-500' />

          <textarea 
                        name='body'
                        type="text"
                        placeholder='DESCRIPTION'
                        value={Inputs.body}
                        onChange={change}
                        className=' md:w-100 py-2 px-2 text-xl rounded outline-none focus:ring-2 ring-green-500' />

        </div>
        <div className='flex pl-4 justify-start mt-4 md:pl-20 gap-4 '>
        <button onClick={submit} className='rounded bg-green-600 font-bold py-2 px-4 font-serif hover:text-white/80 hover:bg-green-300 text-blue-950'>Update</button>
        <button onClick={() => display("none")} className='rounded bg-red-600 font-bold text-blue-950 font-serif hover:text-white/80 hover:bg-red-300 px-4 py-2'>Close</button>
        </div>
        </div>  
  )
}

export default Update