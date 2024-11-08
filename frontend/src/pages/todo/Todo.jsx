import React from 'react';
import { useState , useEffect } from 'react';
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import axios from 'axios';

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Todo = () => {

    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [array, setArray] = useState([]);
  
    


    const show = () => {
        document.getElementById('textarea').style.display = "block";
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });

    };
    const onSubmit = async () => {
        if (inputs.title=== "" || inputs.body === "") {
            toast.error("Title & Desc Are Required!!!")
        }else{
            if (id) {
                await axios.post(`${window.location.origin}/api/v2/addTask` ,{title:inputs.title , body:inputs.body , id:id,} ).then((response)=>{
                    console.log(response)
                });
                setInputs({ title: "", body: "" });
                toast.success("Your Task is Added");
            }
            else{
            setArray([...array, inputs]);
            setInputs({ title: "", body: "" });
            toast.success("Your Task is Added");
            toast.error("Your task is Not Saved! Please SignUp");
            }
        }
       
    };
    const del = async (Cardid)=>{
        if (id) {
            await axios.delete(`${window.location.origin}/api/v2/deleteTask/${Cardid}`,
                {data:{id : id}}
            ).then(()=>{
                toast.error("Task Deleted")
            })  
        }else{
            toast.error("Please SignUp First");
        }
        
        // console.log(id)
        // array.splice(id , "1");
        // setArray(...array)
    }
    const dis =(value)=>{
        console.log(value);
        document.getElementById('todo-update').style.display= value;
    };
    const update = (value)=>{
   toUpdateArray = array[value];
    };
    useEffect(() => {
        if (id) {
            const fetch = async () => {
                await axios.get(`${window.location.origin}/api/v2/getTasks/${id}`).then((response)=>{
                //   console.log(response)
                  setArray(response.data.list);
                });
                };
                fetch();  
        }
     
      }, [onSubmit]);

    return (
        <>
        <div className='w-full min-h-screen h-auto pb-10   justify-center  pt-32  items-center'>
            <ToastContainer />
            <div className="container my-4 flex flex-col  md:w-[800px] mx-auto  justify-center items-center ">
                <div className='flex flex-col mx-auto  p-3 md:w-[600px] rounded-md shadow-md shadow-gray-700    border-2 border-white/80 '>
                    <input
                        onChange={handleChange}
                        name='title'
                        onClick={show}
                        value={inputs.title}
                        type="text"
                        placeholder='TITLE'
                        className='border-none my-2 md:w-100 py-2 px-2 text-xl rounded outline-none focus:ring-2 ring-green-500' />
                    <textarea
                        onChange={handleChange}
                        value={inputs.body}
                        name='body'
                        id='textarea'
                        type="text"
                        placeholder='DESCRIPTION'
                        className='hidden md:w-100 py-2 px-2 text-xl rounded outline-none focus:ring-2 ring-green-500' />
                </div>
                <div className='md:w-[600px] w-full pr-4 md:pr-0 flex justify-end mt-2'>
                    <button
                        onClick={onSubmit}
                        className='text-white font-bold bg-green-400 outline-none rounded-md  px-4 py-2'>Add</button>
                </div>


            </div>
            <div className=''>
                <div className="container ">
                    <div className='grid md:grid-cols-3 justify-items-center '>
                    {array && array.map((item, index) => 
                      ( <div className='md:grid md:grid-cols-3 mx-5 my-2 ' key={index}>
                    <TodoCards display={dis} toBeUpdate={update} title={item.title} updateId={index} body={item.body} id={item._id} delId={del} />
                    </div>))}
                        </div>
                   
                </div>

            </div>
        </div>

        {/* Update */}

        <div id='todo-update' className="hidden absolute  md:top-[80px] top-[100px] left-0  w-[100%]  h-[80vh]  ">
        <div className="container "><Update update={toUpdateArray} display={dis} /></div>
        

        </div>
        </>
    )
}

export default Todo