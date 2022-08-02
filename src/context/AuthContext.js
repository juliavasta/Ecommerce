import {
  useCallback,
  useMemo,
  useState,
  useContext,
  createContext
} from "react";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  const createSession = useCallback(
    ({ token }) => {
      localStorage.setItem("token", JSON.stringify(token));
      setToken(token);
    },
    [setToken]
  );

  const destroySession = useCallback(() => {
    setToken(null);
    localStorage.clear();
  }, [setToken]);

  const value = useMemo(() => {
    return {
      isAuthenticated: !!token,
      token,
      setToken,
      createSession,
      destroySession
    };
  }, [token, setToken, createSession, destroySession]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be wrapped in AuthContextProvider");
  }
  return context;
}

export { AuthContextProvider, useAuthContext };
