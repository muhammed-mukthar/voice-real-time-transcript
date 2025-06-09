import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import './VoiceToText.css';

const VoiceToText: React.FC = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setError(
        'Speech recognition is not supported in your browser. ' +
        'Please use Chrome, Edge, or Safari 14.1+ for the best experience. ' +
        'Firefox and some other browsers do not support this feature.'
      );
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = async () => {
    try {
      setError(null);
      setIsListening(true);
      await SpeechRecognition.startListening({ 
        continuous: true,
        language: 'en-US'
      });
    } catch (err) {
      setError('Error starting speech recognition. Please check your microphone permissions.');
      console.error('Speech recognition error:', err);
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      await SpeechRecognition.stopListening();
      setIsListening(false);
    } catch (err) {
      console.error('Error stopping speech recognition:', err);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="voice-to-text-container">
        <div className="error-message">
          <h3>Browser Compatibility Issue</h3>
          <p>{error}</p>
          <div className="browser-list">
            <h4>Supported Browsers:</h4>
            <ul>
              <li>✅ Google Chrome (desktop and Android)</li>
              <li>✅ Microsoft Edge</li>
              <li>✅ Safari 14.1+</li>
            </ul>
            <h4>Not Supported:</h4>
            <ul>
              <li>❌ Firefox</li>
              <li>❌ Internet Explorer</li>
              <li>❌ Older versions of Safari</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!isMicrophoneAvailable) {
    return (
      <div className="voice-to-text-container">
        <div className="error-message">
          <h3>Microphone Access Required</h3>
          <p>Please allow microphone access to use this feature. You can do this by:</p>
          <ol>
            <li>Clicking the microphone icon in your browser's address bar</li>
            <li>Selecting "Allow" when prompted</li>
            <li>Refreshing the page</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="voice-to-text-container">
      {error && <div className="error-message">{error}</div>}
      <div className="controls">
        <button 
          onClick={isListening ? stopListening : startListening}
          className={`control-button ${isListening ? 'listening' : ''}`}
        >
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
        <button onClick={resetTranscript} className="control-button">
          Reset
        </button>
      </div>
      <div className="status">
        Status: {isListening ? 'Listening...' : 'Not listening'}
      </div>
      <div className="transcript-container">
        <h3>Transcript:</h3>
        <p className="transcript">{transcript || 'Speak to see your words appear here...'}</p>
      </div>
    </div>
  );
};

export default VoiceToText; 