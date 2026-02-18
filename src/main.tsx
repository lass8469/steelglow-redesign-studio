import { ViteReactSSG } from 'vite-react-ssg'
import App from './App'
import './index.css'

// This replaces the standard ReactDOM.createRoot
export const createApp = ViteReactSSG(
  <App />
)
