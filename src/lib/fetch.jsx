'use client'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network failure')
        }
        const result = await response.json()
        setData(result)
      } 
      catch (error) {
        setError(error)
      } 
      finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, error, isLoading }
}

export default useFetch