import { useMemo, useState, useContext, createContext } from "react";

const NavigationContext = createContext({});

function NavigationContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const value = useMemo(() => {
    return {
      isOpen,
      navBarOpen: setIsOpen,
      isOpenSearch,
      searchBarOpen: setIsOpenSearch
    };
  }, [isOpen, isOpenSearch]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be wrapped in NavigationContextProvider"
    );
  }
  return context;
}

export { NavigationContextProvider, useNavigationContext };
