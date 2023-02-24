import { Link } from 'react-router-dom'
import returnLogo from '../assets/return.png'

export default function Update() {
  return (
    <div>
      <Link to="/" className="float-start h5"> <img src={returnLogo} width="40" /> </Link>
    </div>
  )
}
