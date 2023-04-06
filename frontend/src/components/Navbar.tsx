import { NextComponentType } from 'next'

const Navbar: NextComponentType = () => {

  return (
    <div className="Navbar">
        <p>Fullzer4</p>
        <h1>Gerenciador de tarefas</h1>
        <button>Add Task</button>
    </div>
  )
}

export default Navbar;