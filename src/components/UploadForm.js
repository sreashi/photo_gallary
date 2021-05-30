import React from 'react';
import '../App.css';
import { useState } from 'react';
import ProgressBar from './Progress';


const UploadForm = () => {
const [file, setFile] = useState(null);
const [error, setError] = useState(null);
const type = ['image/png','image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
   
   if(selected && type.includes(selected.type)){
       setFile(selected);
       setError(null);
   }
   else{
       setFile(null);
       setError('Please selected an image file (png or jpeg)');
   }
    }
    return ( 
    <form> 
       <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
        <div className="output">
             { error && <div>{ error }</div> }
             { file && <div> {file.name} </div>}
             {file && <ProgressBar file={file} setFile={setFile} />} 
        </div>
         
    </form>
    )
}
export default UploadForm;