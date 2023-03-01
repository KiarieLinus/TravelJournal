import './App.css'
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  )
}

export default App
