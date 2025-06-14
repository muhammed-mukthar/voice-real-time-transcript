# Voice to Text Converter

A real-time voice-to-text conversion web application built with React and the Web Speech API. This application allows users to speak into their microphone and see their speech converted to text in real-time.

## Features

* 🎤 Real-time speech-to-text conversion
* 🔄 Continuous listening mode
* 🎯 High accuracy transcription
* 🎨 Modern and clean user interface
* 📱 Responsive design
* ⚡ Real-time feedback
* 🔍 Browser compatibility detection

## Browser Support

The application works best on the following browsers:

* ✅ Google Chrome (desktop and Android)
* ✅ Microsoft Edge
* ✅ Safari 14.1+

Not supported in:

* ❌ Firefox
* ❌ Internet Explorer
* ❌ Older versions of Safari

## Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (v14.0.0 or higher)
* npm (v6.0.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/voice-transcript.git
cd voice-transcript
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Start Listening" button to begin recording
2. Allow microphone access when prompted by your browser
3. Speak naturally - your words will appear in real-time in the transcript area
4. Click "Stop Listening" when you're done
5. Use the "Reset" button to clear the transcript if needed

## Technical Details

This project is built using:

* React
* TypeScript
* Vite
* react-speech-recognition
* Web Speech API

## Project Structure

```
voice-transcript/
├── src/
│   ├── components/
│   │   ├── VoiceToText.tsx
│   │   └── VoiceToText.css
│   ├── App.tsx
│   └── App.css
├── public/
├── package.json
└── README.md
```

## Development

To start development:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Troubleshooting

### Common Issues

1. **Microphone not working**

   * Ensure your microphone is properly connected
   * Check browser permissions
   * Try refreshing the page

2. **No transcription appearing**

   * Check if you're using a supported browser
   * Ensure microphone access is granted
   * Try speaking more clearly and at a normal volume

3. **Browser compatibility**

   * Use Chrome or Edge for the best experience
   * Check the browser support section above

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

* [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) for the speech recognition functionality
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for the underlying speech recognition technology
