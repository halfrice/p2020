import React, { useState, useEffect } from "react"

const Clock = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [time, setTime] = useState("reticulating time...")

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleString()
      setTime(date)
    }, 1000)
    return () => clearInterval(interval)
  }, [setTime])

  return <>{isMounted && <span>{time}</span>}</>
}

export default Clock
