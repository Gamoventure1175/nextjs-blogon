export default function manifest() {
    return {
      name: 'BlogON',
      short_name: 'BlogON',
      description: 'A personalised app to write small blogs.',
      start_url: '/',
      display: 'standalone',
      background_color: '#1E293B',
      theme_color: '#1E293B',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }