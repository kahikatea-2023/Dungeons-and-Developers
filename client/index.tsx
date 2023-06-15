import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
})
