import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src="/dish.png"  alt="logo" width={60}/>
      <h2>Recipe Finder App</h2>
      </div>
      <Link to={"/"}>
      <img src="/home.png"  alt="logo" width={40}/></Link>
    </nav>
  )
}

export default Navbar