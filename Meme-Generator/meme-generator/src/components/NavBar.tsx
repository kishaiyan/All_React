import '../css/navbar.css'
import logo from "../assets/troll.png"
export default function navBar(){
  return(
    <header className="nav-bar">
      <img className="logo" src={logo} alt="troll face logo"/>
      <h2 className="nav-bar--title">Meme Generator</h2>
      <h3 className="nav-bar--course">React Course - Project - 3</h3>
    </header>
  )
}