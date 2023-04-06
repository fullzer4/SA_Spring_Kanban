import AddPopup from '@/components/AddPopUp';
import EditPopup from '@/components/EditPopUp';
import Navbar from '@/components/Navbar';
import { PopupContext } from '@/context/Popups';
import { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'

const Home: NextPage = () => {

  interface Task {
    id: number;
    name: string;
    text: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const { changeEditState } = useContext(PopupContext)

  useEffect(() => {
    fetch('http://localhost:8080/api/Tasks/get', {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error))
  }, [])

  const finishTask = (e:any, taskId:any) => {
    e.preventDefault()
    fetch(`http://localhost:8080/api/Tasks/delete/${taskId}`, {
      method: 'DELETE',
      mode: 'cors',
    })
      .then(() => {
        console.log("deletada task")
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>
      <main>
        <AddPopup/>
        <EditPopup/>
        <Navbar/>
        <div>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <div>
                    <h2>{task.name}</h2>
                    <hr/>
                  </div>
                  <div>
                    <p>{task.text}</p>
                  </div>
                  <div>
                    <button onClick={(e) => changeEditState(e)}> Edit task </button>
                    <button onClick={(e) => finishTask(e, task.id)}> Complete </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>Sem tarefas a fazer.</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Home;