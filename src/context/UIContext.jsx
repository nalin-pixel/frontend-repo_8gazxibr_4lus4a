import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });
  const [assistantOpen, setAssistantOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('assistantOpen') === 'true';
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('assistantOpen', String(assistantOpen));
  }, [assistantOpen]);

  const value = useMemo(
    () => ({ theme, setTheme, assistantOpen, setAssistantOpen, sidebarCollapsed, setSidebarCollapsed }),
    [theme, assistantOpen, sidebarCollapsed]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
