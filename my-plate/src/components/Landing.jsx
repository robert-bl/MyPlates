import { useContext } from "react"
import { DataContext } from "../DataContext"

export default function Landing (props) {

    const { user } = useContext(DataContext)

    console.log(user)
    return (
        <div className="landing-wrapper">
        
        {!user ? <h1 className="landing-text">Welcome recipe enthusiasts!</h1>: <h1 className="landing-text"> Welcome {user.username} </h1>}

        <img src='https://media.tenor.com/S3LC3hmnUp0AAAAC/cooking-chef.gif ' width={400} height={400}/>
        
        <h1 className="landing-text">Lets get cookin'</h1>

        </div>
    )
}