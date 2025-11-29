import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
