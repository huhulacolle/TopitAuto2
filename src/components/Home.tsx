import { Submit } from '@/interfaces/Submit';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {

  const { register, handleSubmit } = useForm<Submit>();

  const [Music, setMusic] = useState("");

  const [Message, setMessage] = useState("");

  async function googleScrap(data: Submit) {
    setMessage("Téléchargement des images");
    const listImg = await window.api.system.googleScrap(data.top);
    
  }

  async function getMusic() {
    const music = await window.api.system.getMusic();
    setMusic(music);
  }

  async function test(): Promise<void> {
    const test = await window.api.system.test();
    console.log(test);
  }

  return (
    <div>
      <Link to="/update" className='link-light h5 float-end update'>A Propos / Mise à jour</Link>
      <br /><br />
      {/* <button onClick={test}>test</button> */}
      <form onSubmit={handleSubmit(googleScrap)}>
        <h3>
          Quel est le sujet de ton Top ?
          De quoi est composé ton top ?
        </h3>
        <br />
        <input type="text" className="form-control" placeholder="top" {...register("top")} required />
        <br />
        <br />
        <h3>
          Quelle est la musique de ton Top ?
          Quelle musique souhaite-tu utiliser ?
        </h3>
        <br />
        <div className="text-center">
          <input type="text" className="form-control" onClick={getMusic} value={Music} placeholder="Upload" {...register("music")} required readOnly />
        </div>
        <br />
        <input type="submit" className="btn btn-light float-end" />
      </form>
      <br />
      <div className="text-center h3">
        {Message}
      </div>
    </div>
  )
}
