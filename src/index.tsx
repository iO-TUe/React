import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './components/Counter'
import Header from './components/header'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter initialValue={80} />
  },
  {
    path: '/load',
    element: <div>test</div>
  },

])

// console.log('Scipt: App')
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<>
  {/* {console.log('Render: App')} */}
  <div className="App">
    <Header />
    <main className="App-main">
      <RouterProvider router={router} />
    </main>
  </div>
</>);

