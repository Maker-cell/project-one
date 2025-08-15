'use client'
import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import useFetch from '@/lib/fetch'
import { Skeleton } from '@/components/ui/skeleton'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import SearchBar from '@/components/search'
import { UserCard } from '@/components/usercard'

const Page = () => {
  const { data, error, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [showResults, setShowResults] = useState(true)

  useEffect(() => {
    if (data) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredData(results)
    }
  }, [searchTerm, data])

  if (error) {
    return (
      <div className='text-center text-4xl bg-white text-black dark:bg-black dark:text-white'>
        Error: {error.message}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <Skeleton className="w-1/2 h-1/2" />
      </div>
    )
  }

  return (
    <>
      <div className="sticky top-4 right-8 m-6 flex justify-end z-50">
        <ModeToggle />
      </div>
      <div className='px-10'>
        <div className='flex flex-col justify-center gap-4 items-center delay-initial md:flex-row lg:flex-row'>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setShowResults={setShowResults}
        />
        </div>

        <Card>
          {showResults &&
            (filteredData.length > 0 ? (
              filteredData.map((items) => (
                <UserCard key={items.id} items={items} />
              ))
            ) : (
              <p className="text-center p-4">No users found.</p>
            ))}
        </Card>
      </div>
    </>
  )
}

export default Page
