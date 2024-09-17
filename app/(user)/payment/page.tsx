import { getUserSubscription } from '@/db/queries'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const PaymentPage = async () => {
    const { userId } = auth()
    if (!userId) return
    const plan = await getUserSubscription()
  return (
      <div>
          <h1>Subscription Details</h1>
          <p>Your current plan { plan}</p>
    </div>
  )
}

export default PaymentPage