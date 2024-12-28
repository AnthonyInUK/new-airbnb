
import React from 'react'
import { Skeleton } from '../ui/Skeleton'
import { Card, CardHeader } from '../ui/card'

export function StatsLoadingContainer() {
  return <div className='mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
  </div>
}

export function LoadingCard() {
  return <Card>
    <CardHeader>
      <Skeleton className='w-full h-20 rounded' />
    </CardHeader>
  </Card>
}


export function ChartsLoadingContainer() {
  return <Skeleton className='mt-16 w-full h-[300px] rounded' />
}