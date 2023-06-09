import { PopupContext } from '@/context/Popups';
import { NextComponentType } from 'next';
import { useContext, useState } from 'react';

const AddPopup: NextComponentType = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const {add, changeAddState} = useContext(PopupContext)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/api/Tasks/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, text })
    });

    if (response.ok) {
      changeAddState(event)
    } else {
      console.error('Failed to add task');
    }
  };

  return (
    <div className={add}>
      <button className='close' onClick={(e) => changeAddState(e)}> Close </button>
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

export default AddPopup;