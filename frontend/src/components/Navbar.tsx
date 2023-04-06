import { PopupContext } from '@/context/Popups';
import { NextComponentType } from 'next'
import { useContext } from 'react';

const Navbar: NextComponentType = () => {

  const {changeAddState} = useContext(PopupContext)

  return (
    <div className="Navbar">
        <p>Fullzer4</p>
        <h1>Gerenciador de tarefas</h1>
        <button onClick={(e) => changeAddState(e)}>Add Task</button>
    </div>
  )
}

export default Navbar;