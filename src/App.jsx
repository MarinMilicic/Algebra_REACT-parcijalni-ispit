import { useState } from "react"
import UsernameForm from "../components/UsernameForm"
import UserPres from "../components/UserPres"
import "./App.css"

function App() {
  const [inputText, setInputText] = useState("")
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])

  return (
    <>
      <main className="flex flex-column flex-ai-center">
        {!userRepos.length && <UsernameForm inputText={inputText} setInputText={setInputText} setUser={setUser} setUserRepos={setUserRepos} />}
        {!!userRepos.length && <UserPres user={user} setUser={setUser} userRepos={userRepos} setUserRepos={setUserRepos} />}
      </main>
    </>
  )
}

export default App
