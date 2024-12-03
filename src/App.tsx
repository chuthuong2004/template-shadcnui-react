import { ThemeProvider } from "@/components/theme-provider";
import Routers from "@/routes/Routers";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routers />
    </ThemeProvider>
  );
}

export default App;
