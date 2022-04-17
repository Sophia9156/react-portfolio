import { createContext } from "react";

export const Context = createContext();

const Store = props => {
  const cursorState = {
    active: false,
  };

  return (
    <Context.Provider value={cursorState}>{props.children}</Context.Provider>
  )
}

export default Store;