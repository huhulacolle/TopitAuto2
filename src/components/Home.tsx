import { Submit } from '@/interfaces/Submit';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {

  const { register, handleSubmit } = useForm<Submit>();

  async function test(data: Submit) {
    const test = await window.api.system.googleScrap(data.top);
    console.log(test);
  }

  return (
    <div>
      <Link to="/update" className='link-light h5 float-end update'>A Propos / Mise à jour</Link>
      <br /><br />
      <form onSubmit={handleSubmit(test)}>
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
          <input type="text" className="form-control" placeholder="Upload" {...register("music")} required />
        </div>
        <br />
        <input type="submit" className="btn btn-light float-end" />
      </form>
    </div>
  )
}
