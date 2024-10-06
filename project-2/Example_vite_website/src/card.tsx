import './css/card.css'

export default function Card(props: {item:any }){
 console.log({props})
  return(
    <div className='card' key={props.item.id}>
      <div className='card-badge'>SOLD OUT</div>
      <img src={props.item.coverImg}></img>
      <div className="card--row">
        <img src="./assets/Star 1.svg"/>
        <span>{props.item.stats.rating}</span>
        <span className="gray"> ({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <h2>{props.item.title}</h2>
      <p><span className='bold'>From ${props.item.price} </span>/ person</p>

    </div>
  )
}