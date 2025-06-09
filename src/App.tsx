import VoiceToText from './components/VoiceToText';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Voice to Text Converter</h1>
        <p>Speak naturally and see your words appear in real-time</p>
      </header>
      <main>
        <VoiceToText />
      </main>
    </div>
  );
}

export default App;
