import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"  
import { Page } from "./Page"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page />
      <Toaster />
    </ThemeProvider>
    
  )
}

export default App
