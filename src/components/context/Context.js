import { useState, createContext, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [input, setInput] = useState("izmir");
  const [sehir, setSehir] = useState(input);
  const [weather, setWeather] = useState();

  const data = { input, setInput, sehir, setSehir, weather, setWeather };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAll = () => useContext(Context);

export default Provider;
