import React, {useState} from 'react'
import Styles from './box.module.css';



function Box({addBox}) {
  const [formData, setFormData ] = useState ({
    color:"",
    size:""
  });

const getDetails = (e)=> {
  setFormData({...formData, [e.target.name]: e.target.value })
};

const submitFrom = (e) => {
  e.preventDefault();
  const newBox = {
    color: formData.color,
    size: formData.size
  };
  addBox(newBox);
  setFormData({ color : '', size : '' });
};

  return (
    <form onSubmit={submitFrom} className={Styles.contanier} >
      <label htmlFor="">Color</label>
      <input type="text" name="color" value={formData.color} onChange={getDetails} />
      <label htmlFor="">Box size</label>
      <input type="text"  name="size" value={formData.size} onChange={getDetails} />
      <button>Add</button>
    </form>
  );
}

export default Box;