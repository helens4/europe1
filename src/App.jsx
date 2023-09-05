import France from './assets/countries/france.jpeg'
import Germany from './assets/countries/germany.jpeg'
import Belgium from './assets/countries/belgium.jpeg'
import Spain from './assets/countries/spain.jpeg'
import Netherlands from './assets/countries/netherland.jpg'
import "./App.css"


function App() {


  return (
    <div>
      <header className="header-component">
        <h1>Countries</h1>
      </header>
      <ul className="post-list">
        <li className="post-component">
          <button>
            <img src={Germany} alt="Germany" />
            <p>Germany</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={France} alt="France" />
            <p>France</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Belgium} alt="Belgium" />
            <p>Belgium</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Spain} alt="Spain" />
            <p>Spain</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Netherlands} alt="Netherlands" />
            <p>Netherlands</p>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App
