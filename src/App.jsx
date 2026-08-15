import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomeTypingTest from './pages/HomeTypingTest.jsx';
import VocabularyPage from './pages/VocabularyPage.jsx';
import QuestionsPage from './pages/QuestionsPage.jsx';

// App is now just a router shell. The original typing-test screen lives,
// unchanged, at src/pages/HomeTypingTest.jsx (route "/"). Vocabulary
// Practice and Question & Answer Practice are now separate pages/routes:
// src/pages/VocabularyPage.jsx ("/vocabulary") and
// src/pages/QuestionsPage.jsx ("/vocabulary/questions").
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeTypingTest />} />
      <Route path="/vocabulary" element={<VocabularyPage />} />
      <Route path="/vocabulary/questions" element={<QuestionsPage />} />
    </Routes>
  );
}

export default App;
