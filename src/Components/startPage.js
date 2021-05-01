import { Link } from 'react-router-dom'

function StartPage() {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
      <div className='body'>
        <div className='title'>PokePersonality</div>
        <div className='title'>
        <Link style={navStyle} to='/test'><button className='startButton'>Start Test</button></Link>
        </div>
      </div>
  
    );
  }
  
  export default StartPage