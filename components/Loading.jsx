import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function Loading({targetRef}) {
  return (
    <div ref={targetRef} className='mx-auto max-w-7xl' id="shadow-loader">
      <div class="grid grid-rows-2 grid-flow-col gap-4 py-5">
            <Skeleton className="h-[250px] w-[400px] rounded-xl mx-auto max-w-4xl row-span-3 col-span-1" />
            <Skeleton className="h-[100px] w-[750px] rounded-xl mx-auto max-w-4xl col-span-2" /> 
            <Skeleton className="h-[125px] w-[375px] rounded-xl mx-auto max-w-4xl row-span-2 col-span-1" />
            <Skeleton className="h-[125px] w-[375px] rounded-xl mx-auto max-w-4xl row-span-2 col-span-1" />
      </div>
      <div className='grid grid-cols-3 gap-4 py-5'>
            <Skeleton type="card" className="h-[125px] w-[250px] rounded-xl mx-auto max-w-4xl col-span-1" /> 
            <Skeleton type="card" className="h-[125px] w-[250px] rounded-xl mx-auto max-w-4xl col-span-2" />
      </div>
    </div>
  )
}

export default Loading