import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Counter from './components/counter'
import Header from './components/header'
import './index.css'
import Todo from './views/todo'

const router = createBrowserRouter([{
  path: '/',
  element: <Counter initialValue={80} maxValue={10} recurse={true} />
}, {
  path: '/load',
  element: <Counter initialValue={50} maxValue={1000} recurse={false} />
}, {
  path: '/todo',
  element: <Todo />
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<>
  <div className="App">
    <Header />
    <main className="App-main">
      <RouterProvider router={router} />
    </main>
  </div>
</>);

