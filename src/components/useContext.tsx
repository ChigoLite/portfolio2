// context/AppContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// You could also move these to a separate types file if desired
type Theme = "light" | "dark" | "system";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the context with undefined as initial value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("system");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context safely
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
