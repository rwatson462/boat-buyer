import React, { useContext } from "react";
import PubSubContext from "../Context/PubSubContext";

export default function usePubSub() {
  const store = useContext(PubSubContext)

  const state = React.useSyncExternalStore(
    store.subscribe,
    store.get
  )

  return [
    state,
    store.set,
  ]
}
