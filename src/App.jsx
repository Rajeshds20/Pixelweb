import { } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import FAQPage from './pages/FAQPage';
import EventsPage from './pages/EventsPage';
import AdminPage from './pages/AdminPage';
import ChessPage from './pages/Events/ChessPage';
import CodingPage from './pages/Events/CodingPage';
import FreefirePage from './pages/Events/FreefirePage';
import HackathonPage from './pages/Events/HackathonPage';
import MemesPage from './pages/Events/MemesPage';
import PhotographyPage from './pages/Events/PhotographyPage';
import PptPage from './pages/Events/PptPage';
import QuizPage from './pages/Events/Quizpage';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/events/chess',
    element: <ChessPage />,
  },
  {
    path: '/events/coding',
    element: <CodingPage />,
  },
  {
    path: '/events/freefire',
    element: <FreefirePage />,
  },
  {
    path: '/events/hackathon',
    element: <HackathonPage />,
  },
  {
    path: '/events/memes',
    element: <MemesPage />,
  },
  {
    path: '/events/photography',
    element: <PhotographyPage />,
  },
  {
    path: '/events/paperpresentation',
    element: <PptPage />,
  },
  {
    path: '/events/quiz',
    element: <QuizPage />,
  },
  {
    path: '/events/:event',
    element: <EventsPage event />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/*',
    element: <h1>Page Not Found</h1>,
  }]
);


function App() {

  return (
    <>
      <NavBar />
      <RouterProvider router={route} />
    </>
  )
}

export default App
