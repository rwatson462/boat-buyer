import { useEffect, useState } from "react"
import CreateSubscribable from "./CreateSubscribable"

export default function CreateStateHook(initialValue) {
  const subscribers = CreateSubscribable()

  return function useCustomState() {
    const [value, setValue] = useState(initialValue)

    useEffect(() => subscribers.subscribe(setValue), [])

    return [
      value,
      (newValue) => {
        setValue(newValue)
        subscribers.publish(newValue)
      }
    ]
  }
}
