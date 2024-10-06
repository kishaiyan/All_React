import { ChangeEvent, useEffect, useState } from "react"



export default function Meme(){
  const [meme,setMeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMeme,setAllMeme]=useState([]);

  useEffect(()=>{
    async function getMemes() {
      const res= await fetch("https://api.imgflip.com/get_memes")
      const data= await res.json()
      setAllMeme(data.data.memes)
    }
    getMemes()
  },[])


 
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  function getNewMeme() {
   const rand=Math.floor(Math.random()* allMeme.length)
   const newMeme=allMeme[rand].url
   setMeme((prevState)=>{
    return {
      ...prevState,
      randomImage: newMeme
    }
   })
  }

  return(
    <main>
       <div className="form">
                <label>Top Text<input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                /></label>
                <label>Bottom Text<input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                /></label>
                <button className="form--button"
                  onClick={getNewMeme}
                >
                    Get a new meme image 🖼
                </button>
          </div>
          <div className="meme">
              <img src={meme.randomImage} className="meme--image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
    </main>
  )
}