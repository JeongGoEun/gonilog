import React from 'react'

import type { AppProps } from 'next/app'

export default function About({ Component, pageProps }: AppProps) {
  console.log(Component, pageProps)
  return <div>About</div>
}
