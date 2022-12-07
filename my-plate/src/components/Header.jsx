import NavBar from './NavBar'
import '../styling/header-and-nav.css'

export default function Header () {
    return (
        <div className="header-wrapper">
            <div className="headerbackground">
            <h3 className='header'>My Plates</h3>
            <NavBar />
            </div>
        </div>
    )
}