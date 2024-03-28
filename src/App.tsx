import './App.css'
import Counter from './components/counter'
import Header from './components/header'

export default function App() {
  console.log('Scipt: App')
  return <>
    {console.log('Render: App')}
    <div className="App">
      <Header />
      <main className="App-main">
        <Counter initialValue={95} />
      </main>
    </div>
  </>
}
