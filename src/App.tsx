import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserHandle from './components/UserHandle'
import Result from './components/Result'

function App() {
  
  const [name, setName] = useState<string>("")

  function updateName(handle:string){
    setName(handle)
  }

  return (
    <div className="App">
      <UserHandle updateName = {updateName}/>
      <Result userhandle ={name}/>
    </div>
  )
}

export default App
