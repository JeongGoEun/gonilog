import { createClient, SanityClient } from 'next-sanity'
import { sanityConfig } from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(sanityConfig)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = () => previewClient
