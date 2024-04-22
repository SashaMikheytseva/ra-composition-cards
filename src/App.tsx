import { Card } from './components/Card/Card';
import { Image } from './components/Image/Image';
import './App.css'

function App() {
  const first = {
    title: 'Card title',
    content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    btnText: 'Go somewhere',
    url: 'https://placehold.co/600x400'
  }

  const second = {
    title: 'Card title',
    content: 'With supporting text below as a natural lead-in to additional content.',
    btnText: 'Go somewhere'
  }
  

  return (
    <div className='container'>
      <Card {...first}>
        <Image url={first.url} />
      </Card>
      <Card {...second} />
    </div>
  )
}

export default App
