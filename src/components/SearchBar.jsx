import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice'


function SearchBar({ searchbar, setsearchbar }) {
  const [query, setQuery] = useState("")
  const SearchRef = useRef(null)
  const navigate = useNavigate()
  const { data, isLoading } = useGetProductQuery()

  useEffect(()=>{
    function handleClickOutside(e) {
        if(SearchRef.current && !SearchRef.current.contains(e.target)){
            setsearchbar(false)
        }
    }
    document.addEventListener("mousedown",handleClickOutside)
    return ()=>document.removeEventListener("mousedown", handleClickOutside)
  },[])

  if (!searchbar) return null

  const results = (!isLoading && data && query.trim() !== "")? data.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())) : []

  const handleClickResult = (id) => {
    navigate(`/product/${id}`)
    setsearchbar(false)
    setQuery("")
  }


  return (
    <div className='absolute top-15 md:top-20 lg:top-23 bg-white/80 left-0 w-full flex flex-col items-center py-3 shadow-md z-40' ref={SearchRef}>

      {/* Input */}
      <div className='w-[80%] relative flex items-center'>
        <FiSearch size={20} className="absolute left-4 text-[#6B6580]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search Products...'
          autoFocus
          className='w-full pl-11 pr-5 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-gray-300 text-[#4A2E2E] placeholder-[#6B6580] focus:outline-none focus:ring-2 focus:ring-[#D98E8E]/40 focus:border-0 transition'
        />
      </div>

      {/* dropdown of products */}
      {query.trim() !== "" && (
        <div className='w-[80%] bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 mt-3 overflow-hidden max-h-72 overflow-y-auto'>
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickResult(item.id)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/60 cursor-pointer transition border-b border-white/30 last:border-0"
              >
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <p className="text-sm text-[#4A2E2E]">{item.name}</p>
                  <p className="text-xs text-[#C97A7A]">Rs.{item.price}</p>
                </div>

                {!item.inStock && (
                  <span className="text-[10px] text-[#6B6580] bg-gray-100 px-2 py-0.5 rounded-full">Out of stock</span>
                )}
              </div>

              
            ))
          ) : (
            <p className="text-sm text-[#6B6580] text-center py-4">No products found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar