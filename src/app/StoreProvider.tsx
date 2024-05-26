'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { increment } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
    count,
  children,
}: {
    count: void,
    children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
      storeRef.current = makeStore()
      storeRef.current.dispatch(increment(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}