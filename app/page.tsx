'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Load the original React app's JavaScript
    const script = document.createElement('script')
    script.src = '/static/js/main.93cfbed9.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="/static/js/main.93cfbed9.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <main>
      <div id="root">
        {/* The React app will mount here */}
      </div>
    </main>
  )
}

