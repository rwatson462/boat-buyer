import React from "react";

export default function usePubSubData(defaultValue) {
  const ref = React.useRef(defaultValue)

  const subscribers = React.useRef(new Set())

  const get = React.useCallback(() => ref.current, [])

  const set = React.useCallback((value) => {
    ref.current = { ...ref.current, ...value }
    subscribers.current.forEach(callback => callback())
  }, [])

  const subscribe = React.useCallback((callback) => {
    subscribers.current.add(callback)
    return () => subscribers.current.delete(callback)
  }, [])

  return {
    get,
    set,
    subscribe
  }
}
