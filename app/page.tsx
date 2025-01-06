'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Portfolio = dynamic(
  () => import('./components/Portfolio').then(mod => mod.default),
  {
    loading: () => <div>Loading...</div>,
    ssr: false
  }
)

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Portfolio />
    </Suspense>
  )
}

