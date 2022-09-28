import { useState, createContext, useContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [input, setInput] = useState("izmir");
  const [city, setCity] = useState(input);
  const [weather, setWeather] = useState();
  const dayFormat = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',];
  const data = { input, setInput, city, setCity, weather, setWeather, dayFormat };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAll = () => useContext(Context);
export default Provider;
