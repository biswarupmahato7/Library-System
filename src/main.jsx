import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import { BooksData } from './utils/mockData.js'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import AllBooks from './components/AllBooks.jsx'
import AddBooks from './components/AddBooks.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: (
          <>
          <Home/>
          <AllBooks booksData={BooksData}/>
          </>
        ) 
      },
      {
        path: '/about',
        element: <About/>
      },
    
      {
        path: '/all-books',
        element: (
          <>
          <Search/> 
           <AllBooks booksData={BooksData}/>
          </>
        )
     
      },
      {
        path: '/add-book',
        element: <AddBooks/>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails/>
      }
      
    ],
    errorElement: <Error/>
  },

 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}/>
  </StrictMode>,
)
