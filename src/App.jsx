import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomeTypingTest from './pages/HomeTypingTest.jsx';
import VocabularyPage from './pages/VocabularyPage.jsx';
import QuestionsPage from './pages/QuestionsPage.jsx';
import VocabularyGamePage from './pages/VocabularyGamePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeTypingTest />} />
      <Route path="/vocabulary" element={<VocabularyPage />} />
      <Route path="/vocabulary/questions" element={<QuestionsPage />} />
      <Route path="/vocabulary/game" element={<VocabularyGamePage />} />
    </Routes>
  );
}

export default App;
