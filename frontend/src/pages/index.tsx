import Navbar from '@/components/Navbar';
import { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {

  interface Task {
    id: number;
    name: string;
    text: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/Tasks/get', {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>
      <main>
        <Navbar/>
        <div>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <h2>{task.name}</h2>
                  <p>{task.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem tarefas a fazer.</p>
          )}
        </div>
      </main>
    </>
  )
}

export default Home;