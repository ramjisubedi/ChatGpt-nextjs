'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const ClientProvider = () => {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default ClientProvider