import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(to bottom, #181818, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px', // Apple icons have rounded corners usually, but we output square and let OS clip it. We'll leave it square but add some padding.
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M8 5v14l11-7z" />
          <circle cx="4" cy="12" r="2" fill="#FF4444" />
          <circle cx="4" cy="6" r="1.5" fill="#FF6666" />
          <circle cx="4" cy="18" r="1.5" fill="#FF6666" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
