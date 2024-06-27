import { Component } from "react"
import "./UserPres.css"

class UserPres extends Component {
    constructor(props) {
        super(props)
        this.user = props.user
        this.userRepos = props.userRepos
        this.setUser = props.setUser
        this.setUserRepos = props.setUserRepos

        this.repositories = this.userRepos.map(repository => (
            <li key={repository.id}>{repository.name}</li>
        ))

        this.resetHandler = this.resetHandler.bind(this)
    }

    resetHandler = (event) => {
        event.preventDefault()
        this.setUser({})
        this.setUserRepos([])
    }

    render() {
        return (
            <div className="pres-container flex flex-column">
                <div className="flex flex-ai-center m-b-10">
                    <img src={this.user.avatar_url} className="m-r-30" height={100} alt="avatar" />
                    <h1>{this.user.name}</h1>
                </div>
                <div className="m-b-10"><strong>BIO: </strong>{this.user.bio}</div>
                <div className="m-b-10"><strong>LOCATION: </strong>{this.user.location}</div>
                <strong>REPOSITORIES:</strong>
                <ul className="m-b-30">{this.repositories}</ul>
                <button type="button" onClick={this.resetHandler}>Reset</button>
            </div>
        )
    }
}

export default UserPres