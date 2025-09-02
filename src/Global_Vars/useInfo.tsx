"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// 1. Create the context
type UserContextType = {
  username: string;
  setUsername: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Create provider
export function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState(""); // default value

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook for consuming context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside UserProvider");
  return context;
}
