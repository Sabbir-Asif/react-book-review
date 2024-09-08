import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import BookDetails from './components/bookDetails/BookDetails.jsx';
import ListedBooks from './components/listedBooks/ListedBooks.jsx';
import PagesToRead from './components/pagesToRead/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/data/books.json')   //This is not the best practice
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/data/books.json')
      },
      {
        path: 'pages-to-read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('data/books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
