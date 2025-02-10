'use client'

import React from 'react'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import { createClient } from '@/queries/client/create-client'

interface ApolloWrapperProps {
  children: React.ReactNode
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloNextAppProvider makeClient={createClient}>{children}</ApolloNextAppProvider>
}
