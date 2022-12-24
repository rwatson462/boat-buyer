
export default function CreateSubscribable() {
  const subscribers = new Set()

  return {
    subscribe: (sub) => {
      subscribers.add(sub)
      return () => subscribers.delete(sub)
    },
    publish: (msg) => {
      subscribers.forEach(callback => callback(msg))
    }
  }
}
