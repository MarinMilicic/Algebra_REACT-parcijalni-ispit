import "./UsernameForm.css"

function UsernameForm({ inputText, setInputText, setUser, setUserRepos }) {

  const inputHandler = (event) => {
    setInputText(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!inputText) {
      alert("Potrebno je unijeti username!")
      return
    }

    fetch(`https://api.github.com/users/${inputText}`).then(prom => prom.json()).then(res => setUser(res))
    fetch(`https://api.github.com/users/${inputText}/repos`).then(prom => prom.json()).then(res => setUserRepos(res))
    setInputText("")
  }


  return (
    <form className="form-container flex flex-column" onSubmit={submitHandler}>
      <div className="flex flex-column m-b-30">
        <label className="m-b-10" htmlFor="user-input">GitHub username:</label>
        <input type="text" id="user-input" name="user-input" placeholder="e.g. facebook" value={inputText} onChange={inputHandler} />
      </div>
      <button type="submit">GO!</button>
    </form>

  )
}

export default UsernameForm