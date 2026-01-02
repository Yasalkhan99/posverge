'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Immediate hide original SVG logo (page load hote hi)
    const hideOriginalLogo = () => {
      const originalLogos = document.querySelectorAll('img[src="/static/media/logo.b701aa8c72fee4e8d4d7c222e5e96f1f.svg"], img[src*="logo.b701aa8c72fee4e8d4d7c222e5e96f1f"]')
      originalLogos.forEach((img) => {
        const imgElement = img as HTMLImageElement
        imgElement.style.display = 'none'
        imgElement.style.visibility = 'hidden'
        imgElement.style.opacity = '0'
        imgElement.style.width = '0'
        imgElement.style.height = '0'
      })
    }
    
    // Immediately hide logo
    hideOriginalLogo()
    
    // DOM ready hone ke baad bhi check karna
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', hideOriginalLogo)
    } else {
      hideOriginalLogo()
    }
    
    // Load the original React app's JavaScript
    const script = document.createElement('script')
    script.src = '/static/js/main.93cfbed9.js'
    script.defer = true
    script.onerror = () => {
      console.error('Failed to load React app script')
    }
    document.body.appendChild(script)

    // Logo replace karne ke liye function
    const replaceLogo = () => {
      // Specific logo1 class aur data-discover attribute ke saath target karna
      const logoLink = document.querySelector('a.logo1[data-discover="true"]') as HTMLAnchorElement
      if (logoLink) {
        // Pehle original SVG logo ko completely remove karna
        const oldLogoImg = logoLink.querySelector('img[src="/static/media/logo.b701aa8c72fee4e8d4d7c222e5e96f1f.svg"]') as HTMLImageElement
        if (oldLogoImg) {
          oldLogoImg.remove()
        }
        
        // Naya logo check karna (agar pehle se nahi hai to add karna)
        let logoImg = logoLink.querySelector('img[src="/Asset 1.png"]') as HTMLImageElement
        if (!logoImg) {
          logoImg = document.createElement('img')
          logoImg.src = '/Asset 1.png'
          logoImg.alt = 'POS VERGE Logo'
          logoLink.insertBefore(logoImg, logoLink.firstChild)
        }
        
        // Logo size aur styling set karna
        logoImg.style.maxWidth = '150px'
        logoImg.style.maxHeight = '50px'
        logoImg.style.width = 'auto'
        logoImg.style.height = 'auto'
        logoImg.style.objectFit = 'contain'
        logoImg.style.display = 'block'
        
        // POS Verge text add karna (agar pehle se nahi hai)
        let posVergeText = logoLink.querySelector('.pos-verge-text') as HTMLElement
        if (!posVergeText) {
          posVergeText = document.createElement('span')
          posVergeText.className = 'pos-verge-text'
          posVergeText.textContent = 'POS VERGE'
          posVergeText.style.marginLeft = '12px'
          posVergeText.style.fontFamily = 'Inter, sans-serif'
          posVergeText.style.fontSize = '20px'
          posVergeText.style.fontWeight = '700'
          posVergeText.style.color = '#ffffff'
          posVergeText.style.whiteSpace = 'nowrap'
          posVergeText.style.letterSpacing = '0.5px'
          posVergeText.style.lineHeight = '1.2'
          logoLink.appendChild(posVergeText)
        } else {
          // Existing text ko update karna
          posVergeText.style.fontFamily = 'Inter, sans-serif'
          posVergeText.style.fontSize = '20px'
          posVergeText.style.fontWeight = '700'
          posVergeText.style.letterSpacing = '0.5px'
          posVergeText.style.lineHeight = '1.2'
        }
        
        // Logo link container ko bhi style karna
        logoLink.style.display = 'flex'
        logoLink.style.alignItems = 'center'
        logoLink.style.maxWidth = 'none' // Text ke liye width remove karna
        logoLink.style.height = 'auto'
        logoLink.style.gap = '12px'
      }
    }

    // AIVORA text aur email replace karne ke liye function - simplified and safer
    const replaceAivoraContent = () => {
      try {
        // Wait for React app to fully render
        const rootElement = document.getElementById('root')
        if (!rootElement || rootElement.children.length === 0) {
          return // React app not loaded yet
        }
        
        // Footer copyright text ko replace karna - pehle yeh
        const copyrightElements = document.querySelectorAll('.footer__copyright-text p, .footer__copyright p, footer p')
        copyrightElements.forEach((element) => {
          if (element.textContent && element.textContent.includes('Copyright') && element.textContent.includes('Aivora')) {
            element.textContent = element.textContent.replace(/Copyright\s*©\s*\d{4}\s*Aivora/gi, 'Copyright © 2026 POS Verge')
            element.textContent = element.textContent.replace(/Aivora.*All rights reserved/gi, 'POS Verge. All rights reserved')
          }
        })
        
        // Only replace in specific safe elements - avoid breaking React structure
        const safeSelectors = 'h1.title, h2.title, .title'
        const safeElements = document.querySelectorAll(safeSelectors)
        
        safeElements.forEach((element) => {
          // Skip if inside navbar
          if (element.closest('nav') || element.closest('.navbar') || element.closest('header')) {
            return
          }
          
          if (element.textContent) {
            // AIVORA text replace
            if (element.textContent.includes('AIVORA') && !element.textContent.includes('POS VERGE')) {
              element.textContent = element.textContent.replace(/AIVORA/g, 'POS VERGE')
            }
            if (/Aivora/i.test(element.textContent) && !element.textContent.includes('POS Verge')) {
              element.textContent = element.textContent.replace(/Aivora/gi, 'POS Verge')
            }
          }
        })
        
        // Email links - sirf email buttons/links
        const emailLinks = document.querySelectorAll('a[href*="mailto:"], button[class*="email"]')
        emailLinks.forEach((link) => {
          const linkElement = link as HTMLAnchorElement | HTMLButtonElement
          
          // href update
          if (linkElement instanceof HTMLAnchorElement && linkElement.href && linkElement.href.includes('aivora@')) {
            linkElement.href = 'mailto:info@posverge.com'
          }
          
          // Text content update - sirf email containing text
          if (linkElement.textContent && linkElement.textContent.includes('@')) {
            // "POS info@posverge.com" ko "info@posverge.com" se replace
            if (linkElement.textContent.includes('POS') && linkElement.textContent.includes('info@posverge.com')) {
              linkElement.textContent = linkElement.textContent.replace(/POS\s+info@posverge\.com/gi, 'info@posverge.com')
            }
            // POS Verge@posverge.com ko replace
            if (linkElement.textContent.includes('POS Verge@') || linkElement.textContent.includes('POSVerge@')) {
              linkElement.textContent = linkElement.textContent.replace(/POS\s*Verge@posverge\.com/gi, 'info@posverge.com')
            }
            // aivora@ ko replace
            if (linkElement.textContent.includes('aivora@') || linkElement.textContent.includes('@domain.com')) {
              linkElement.textContent = linkElement.textContent.replace(/aivora@[^\s]*/gi, 'info@posverge.com')
              linkElement.textContent = linkElement.textContent.replace(/@domain\.com/gi, '@posverge.com')
            }
          }
        })
      } catch (error) {
        console.error('Error replacing Aivora content:', error)
      }
    }

    // React app load hone ke baad logo replace karna
    script.onload = () => {
      console.log('React app script loaded')
      
      // Browser tab title ko "POS Verge" set karna
      document.title = 'POS Verge'
      
      // Multiple attempts karna (React app render hone ke liye time chahiye)
      const attempts = [500, 1000, 2000, 3000]
      attempts.forEach(delay => {
        setTimeout(() => {
          replaceLogo()
          replaceAivoraContent()
          // Title ko ensure karna
          if (document.title !== 'POS Verge') {
            document.title = 'POS Verge'
          }
        }, delay)
      })
      
      // MutationObserver se dynamically check karna (agar navbar baad mein render ho)
      let observerTimeout: NodeJS.Timeout | null = null
      const observer = new MutationObserver(() => {
        // Debounce karna taake performance issue na ho
        if (observerTimeout) {
          clearTimeout(observerTimeout)
        }
        observerTimeout = setTimeout(() => {
          replaceLogo()
          replaceAivoraContent()
          // Title ko ensure karna
          if (document.title !== 'POS Verge') {
            document.title = 'POS Verge'
          }
        }, 300)
      })
      
      const rootElement = document.getElementById('root')
      if (rootElement) {
        observer.observe(rootElement, {
          childList: true,
          subtree: true,
          characterData: false // characterData se avoid karna taake infinite loop na ho
        })
      }
    }
    
    // Don't run immediately - wait for React app to load

    return () => {
      const existingScript = document.querySelector('script[src="/static/js/main.93cfbed9.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <main>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Original Aivora SVG logo ko immediately hide karna */
          img[src="/static/media/logo.b701aa8c72fee4e8d4d7c222e5e96f1f.svg"],
          img[src*="logo.b701aa8c72fee4e8d4d7c222e5e96f1f"],
          a.logo1[data-discover="true"] img[src*="logo.b701aa8c72fee4e8d4d7c222e5e96f1f"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
          }
          
          /* Logo styling for navbar */
          a.logo1[data-discover="true"] {
            display: flex !important;
            align-items: center !important;
            max-width: none !important;
            height: auto !important;
            flex-shrink: 0 !important;
            gap: 12px !important;
          }
          
          a.logo1[data-discover="true"] img {
            max-width: 150px !important;
            max-height: 50px !important;
            width: auto !important;
            height: auto !important;
            object-fit: contain !important;
            display: block !important;
          }
          
          /* POS Verge text styling */
          a.logo1[data-discover="true"] .pos-verge-text {
            margin-left: 12px !important;
            font-family: 'Inter', sans-serif !important;
            font-size: 20px !important;
            font-weight: 700 !important;
            color: #ffffff !important;
            white-space: nowrap !important;
            letter-spacing: 0.5px !important;
            line-height: 1.2 !important;
          }
          
        `
      }} />
      <div id="root" style={{ minHeight: '100vh' }}>
        {/* The React app will mount here */}
      </div>
    </main>
  )
}