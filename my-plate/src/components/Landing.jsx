import { useContext } from "react"
import { DataContext } from "../DataContext"

export default function Landing (props) {

    const { user } = useContext(DataContext)

    console.log(user)
    return (
        <div className="test-wrapper">
        <h3 className="landing">Welcome recipe enthusiasts! Please sign in or peruse our recipe list</h3>
        {/* <h2 className="landing">Welcome {user.username}</h2> */}
        
        <img src='https://media.tenor.com/S3LC3hmnUp0AAAAC/cooking-chef.gif ' width={400} height={400}/>
        
        </div>
    )
}