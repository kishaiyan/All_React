import airbnbLogo from './assets/airbnb.svg'
import Card from './card'
import './css/App.css'
import data from './data'
import MainContent from './MainContent'

function App() {
  const experience=data.map((item)=>{
    return (<Card 
      item={item}
    />)
  })

  return (<>
    <nav className="nav-bar">
      <img className="logo"src={airbnbLogo} alt="react-Logo"/>
      
      <ul className='nav-bar-items'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Pricing</li>
      </ul>
    </nav>
    <MainContent />
   <section className="experience-list">{experience}</section>
    </>
  )
}

export default App
