/**
 * Unmint Theme Configuration
 *
 * Customize your documentation's look and feel by modifying this file.
 * All colors, branding, and styling can be adjusted here.
 */

export const siteConfig = {
  // Site metadata
  name: 'StreamNook Docs',
  description: 'The complete guide to StreamNook, the desktop Twitch viewing client.',
  url: 'https://docs.streamnook.app',

  // Logo configuration
  logo: {
    src: '/logo.png',
    alt: 'StreamNook',
    width: 32,
    height: 36,
  },

  // Navigation links
  links: {
    github: 'https://github.com/winters27/StreamNook',
    discord: 'https://discord.gg/2xvuF9TES7',
    support: 'https://streamnook.app/support',
    website: 'https://streamnook.app',
  },

  // Footer configuration
  footer: {
    copyright: '© 2026 StreamNook',
    links: [
      { label: 'Website', href: 'https://streamnook.app' },
      { label: 'Download', href: 'https://streamnook.app' },
      { label: 'GitHub', href: 'https://github.com/winters27/StreamNook' },
    ],
  },
}

export const themeConfig = {
  // Primary accent color - used for active states, links, highlights
  colors: {
    // Light mode
    light: {
      accent: '#5b7a82',        // StreamNook accent, darkened for light backgrounds
      accentForeground: '#ffffff',
      accentMuted: 'rgba(91, 122, 130, 0.1)',
    },
    // Dark mode
    dark: {
      accent: '#97b1b9',        // StreamNook accent
      accentForeground: '#0c0c0d',
      accentMuted: 'rgba(151, 177, 185, 0.12)',
    },
  },

  // Code block styling
  codeBlock: {
    light: {
      background: '#fafafa',
      titleBar: '#f3f4f6',
    },
    dark: {
      background: '#1a1a1f',
      titleBar: '#1f2937',
    },
  },

  // OG Image generation settings
  ogImage: {
    // Gradient background (CSS gradient string)
    gradient: 'linear-gradient(135deg, #0c0c0d 0%, #15171a 60%, #1d2226 100%)',
    // Text colors
    titleColor: '#f5f5f6',
    sectionColor: '#97b1b9',
    // Logo URL (absolute URL required for OG images)
    logoUrl: 'https://docs.streamnook.app/logo.png',
  },
}

// Export CSS variable values for use in Tailwind
export function getCSSVariables(mode: 'light' | 'dark') {
  const colors = themeConfig.colors[mode]
  return {
    '--accent': colors.accent,
    '--accent-foreground': colors.accentForeground,
    '--accent-muted': colors.accentMuted,
  }
}

/**
 * Get the site URL dynamically
 * Priority: NEXT_PUBLIC_SITE_URL > VERCEL_PROJECT_PRODUCTION_URL > VERCEL_URL > siteConfig.url
 * This allows OG images to work automatically on Vercel without configuration
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Use production URL if available (custom domain)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  // Fallback to deployment URL for preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return siteConfig.url
}
