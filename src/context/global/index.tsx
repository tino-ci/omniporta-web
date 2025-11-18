
"use client";

import React, { createContext, useContext, useState } from "react";

// 1. 定义状态类型
interface User {
  id: string;
  name: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// 2. 创建 Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. 提供 Provider 包裹应用
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

// 4. 自定义 hook：用于消费 Context
export function useGlobalContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
