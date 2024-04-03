import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './components/counter'
import Header from './components/header'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter initialValue={80} maxValue={100} recurse={false} />
  },
  {
    path: '/load',
    element: <Counter initialValue={50} maxValue={15} recurse={true} />
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

