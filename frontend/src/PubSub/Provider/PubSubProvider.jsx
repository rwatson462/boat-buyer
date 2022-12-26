import PubSubContext from "../Context/PubSubContext";
import usePubSubData from "../Hooks/usePubSubData";

export default function PubSubProvider({ children, defaultValue }) {
  const store = usePubSubData(defaultValue)

  return (
    <PubSubContext.Provider value={store}>
      {children}
    </PubSubContext.Provider>
  )
}
