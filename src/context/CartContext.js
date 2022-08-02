import {
  useCallback,
  useMemo,
  useState,
  useContext,
  createContext
} from "react";

const CartContext = createContext({});

function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleAddQuantity = useCallback(
    (id, quantity) => {
      setItems(
        items.map((item) => {
          return item.product.id === id
            ? {
                ...item,
                quantity:
                  quantity !== undefined
                    ? item.quantity + quantity
                    : item.quantity + 1
              }
            : item;
        })
      );
    },
    [items]
  );

  const handleRemoveQuantity = useCallback(
    (id) => {
      setItems(
        items.map((item) => {
          return item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
    },
    [items]
  );
  const handleAdd = useCallback(
    (product, quantity = 1) => {
      const item = items.find((item) => item.product.id === product.id);
      if (item) {
        handleAddQuantity(product.id, quantity);
      } else {
        setItems([...items, { product, quantity }]);
      }
    },
    [handleAddQuantity, items]
  );

  const handleRemove = useCallback(
    (id, removeFromCart = false) => {
      const item = items.find((item) => item.product.id === id);
      if ((!!item && item.quantity === 1) || removeFromCart) {
        setItems(items.filter((item) => item.product.id !== id));
      } else {
        handleRemoveQuantity(id);
      }
    },
    [items, handleRemoveQuantity]
  );

  const value = useMemo(() => {
    return {
      items,
      cartOpen,
      add: handleAdd,
      remove: handleRemove,
      open: setCartOpen,
      search: setSearchText,
      searchText
    };
  }, [handleAdd, handleRemove, items, cartOpen, searchText]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be wrapped in CartContextProvider");
  }
  return context;
}

export { CartContextProvider, useCartContext };
