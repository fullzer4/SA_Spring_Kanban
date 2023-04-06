import { PopupContext } from '@/context/Popups';
import { NextComponentType } from 'next';
import { useContext, useState } from 'react';

const EditPopup: NextComponentType = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const { edit, changeEditState } = useContext(PopupContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const taskId = 1
    const response = await fetch(`http://localhost:8080/api/Tasks/update/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, text })
    });
  
    if (response.ok) {
      changeEditState(event)
      console.log("Task updated successfully");
    } else {
      console.error('Failed to update task');
    }
  };

  return (
    <div className={edit}>
      <button className='close' onClick={(e) => changeEditState(e)}> Close </button>
      <form onSubmit={handleSubmit} className='forms'>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Text:
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPopup;