import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TodoCards = ({title , body ,id , delId , display , updateId , toBeUpdate}) => {
  return (
    <div className='md:w-[400px] w-[300px] md:h-[200px] h-[180px] text-white p-3 border-2 border-white/15 '>
        <div className='md:h-[120px] h-[100px] w-full overflow-clip'>
            <h4 className='font-bold text-xl'>{title}</h4>
            <p className='text-justify md:leading-8'>{body.split("",110)}...</p>
        </div>
        <div className='flex justify-around md:mt-2'>
            <div className='flex px-4 py-2  items-center content-center justify-between text-green-600 cursor-pointer hover:shadow-xl transition-all duration-0.5 '
            onClick={()=>{
              display("block");
              toBeUpdate(updateId);
            }}
            >
              
              <EditNoteIcon fontSize='large'  />
              Edit
            </div>
            <div
            onClick={()=>{
             delId(id);
            }}
            className='px-4 py-2 flex justify-between content-center text-red-600 items-center cursor-pointer hover:shadow-xl transition-all duration-0.5'>
        <DeleteIcon />
        Delete
        </div>
        </div>
    </div>
  )
}

export default TodoCards