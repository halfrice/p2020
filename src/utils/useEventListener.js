import { useEffect, useRef } from "react"

const isSSR = typeof window === "undefined"

const useEventListener = (
  eventName,
  handler,
  element = isSSR ? null : window
) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const eventListener = event => savedHandler.current(event)
    const isSupported = element && element.addEventListener

    if (!isSupported) return

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export default useEventListener
