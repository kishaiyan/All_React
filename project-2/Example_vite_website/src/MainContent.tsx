import "./css/main.css"
import photoGrid from "./assets/Group 77.png"

function MainContent(){
  return (
    <section className="hero">
      <img className="photo-grid" src={photoGrid} alt="Photo Grid"/>
      <h3 className="hero--heading">Online Experiences</h3>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
  )
}
export default MainContent;