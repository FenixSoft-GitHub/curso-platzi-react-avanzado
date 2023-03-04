import * as React from 'react'
import { Svg } from './styles'

export const Logo = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={377.038}
    height={171.2}
    preserveAspectRatio='xMidYMid'
    style={{
      background: '0 0'
    }}
    viewBox='61.481 -10.6 377.038 171.2'
    {...props}
  >
    <defs>
      <linearGradient
        id='a'
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ff5800' />
        <stop offset={1} stopColor='#0ff' />
      </linearGradient>
    </defs>
    <path
      fill='url(#a)'
      d='M33.82-20.56q0 6.23-6.05 13.17-4.54 5.34-9.79 7.75-2.94 1.42-4.9 1.42-1.95 0-3.2-.89Q7.74-.53 7.74-3.29t1.52-6.32q-19.67 28.12-19.67 33.64 0 .53.22.93t-.13.49l-.27-.09q-2.85-2.49-2.85-5.87 0-7.74 15.84-31.59-4.27 4.27-4.27 3.02 0-.71.98-1.6 4.36-3.74 9.43-10.23 5.08-6.5 6.55-7.97 1.46-1.47 3.6-1.47t4.27 2.23q-1.78 2.13-6.67 8.81 4.27-4.01 8.63-5.61 2.14-.8 3.83-.8t3.38 1.11q1.69 1.11 1.69 4.05ZM9.08-4q0 4 3.11 4 1.78 0 5.39-1.78 3.6-1.78 7.03-5.83t4.85-7.3q1.42-3.25 1.42-5.29 0-3.65-2.84-3.65-1.87 0-5.79 1.87t-7.3 5.87Q9.08-9.34 9.08-4Zm44.85-9.88q4.72-2.58 4.72-5.25t-3.2-2.67q-1.52 0-3.21.8-3.74 1.69-7.21 5.87-4.27 5.16-4.27 9.61 0 1.69.94 3.16.93 1.47 3.33 1.47 4.19 0 10.59-4.41 6.41-4.4 11.04-8.85 1.07-1.07 1.07-.09 0 .62-.54 1.07-3.29 3.02-4.4 4.05-1.11 1.02-4.41 3.65-3.29 2.62-5.34 3.69-6.32 3.29-10.72 3.29-4.41 0-6.94-2-2.54-2-2.54-5.56 0-7.57 6.76-13.04 6.77-5.47 14.16-5.47 4.98 0 6.67 2.13.71 1.07.71 2.27t-.8 2.63q-1.6 2.76-6.01 4.85-4.4 2.09-8.32 2.09-1.51 0-1.64-.27-.14-.27.22-.4.35-.13.98-.13 3.56 0 8.36-2.49Zm25.64-16.65q1.95-2.93 3.16-4.67 1.2-1.73 1.91-2.54.71-.8 3.2-1.38 2.49-.57 4.81-.57 2.31 0 2.31.49t-3.82 4.13q-3.83 3.65-8.9 9.71 6.05.97 7.92 3.82.71 1.25.22 1.6-.49.36-1.11-.26-1.87-1.87-5.97-1.87-1.78 0-4 .35-7.21 9.26-9.08 15.13-.62 1.7-.62 2.85 0 3.12 2.58 3.12 2.76 0 7.74-3.83 6.5-4.89 11.3-9.7.89-.98 1.16-.45.27.54-.44 1.16-7.66 8.01-12.86 11.79-5.21 3.79-9.57 3.79-5.96 0-5.96-6.32 0-3.03 1.69-7.21l-1.61 1.51q-.71.71-1.02.4-.31-.31-.31-.58 0-.26.71-.89 6.5-5.69 8.9-8.63-1.69.62-2.27.09-.58-.53-.8-1.42-.22-.89.89-2.19 1.11-1.29 3.29-1.86 2.18-.58 3.25-.67 1.34-1.96 3.3-4.9Zm.44 54.92q-7.74 0-12.86-3.39-5.12-3.38-5.12-9.61 0-.35.27-.35.62 0 .8.71.8 4.54 4.36 7.83 1.6 1.51 4.41 2.49 2.8.98 4.67.98h2.4q9.88-.53 17.27-9.97 3.47-4.45 6.14-8.85 2.67-4.41 5.78-9.84 3.12-5.43 5.26-8.27-2.76 3.11-6.95 7.12-4.18 4-7.21 5.78Q96.21.8 93.63.8q-2.58 0-4.41-1.56-1.82-1.55-1.82-3.87 0-6.58 5.87-12.9 4.45-4.72 11.04-6.68 2.93-.98 5.74-.98 2.8 0 5.43 1.56 2.62 1.56 3.33 3.69 1.43 0 3.12 1.21 1.69 1.2 1.69 1.73 0 .54-.71.89-2.85 1.43-8.99 12.46-5.96 10.59-13.97 18.96-4.01 4.18-9.3 6.63-5.3 2.45-10.64 2.45Zm13.8-27.95q0 2.05 2.13 2.05 1.69 0 4.18-1.87 6.06-4.01 12.64-11.66 3.03-3.47 3.03-5.43 0-.71-.49-1.29-.49-.58-2.09-.58-1.6 0-5.12 1.87t-7.21 5.65q-3.69 3.78-5.38 6.77-1.69 2.98-1.69 4.49Zm55.53-14.24q-3.91 4.54-6.36 8.32-2.45 3.78-2.45 5.34t1.83 1.56q1.82 0 7.47-3.65 5.65-3.65 10.46-8.19.44-.44.8-.35.36.09.36.44 0 .36-.36.8-11.48 10.5-17.53 13.17-2.67 1.07-3.83 1.07-4.27 0-5.83-1.42-1.56-1.43-1.56-3.12 0-3.38 1.34-5.16 4.36-6.14 6.94-10.41.8-1.25-.31-1.74t-2.76-.49q-1.65 0-1.74-.09-5.96 8.01-11.83 12.64-.72.62-.8 0 0-.71.97-1.69 6.23-5.34 10.24-11.3-.8-.54-.8-1.47 0-.93.13-2.27.14-1.33 1.38-3.56 2.14-3.74 4.45-3.74 1.96 0 1.96 2.14 0 2.93-2.76 6.41-1.33 1.6-2.49 2.31 3.29-1.07 9.61-1.07 3.12 0 4.45 2.32.18.35.18 1.06 0 .72-1.16 2.14Zm40.32 4.09q-.98 1.16-2 2.5-1.03 1.33-2.58 3.65-1.56 2.31-1.56 3.91t1.38 1.6q1.38 0 4.49-1.69 6.23-3.56 13.8-10.68.89-.89 1.15-.26v.35q0 .27-.35.62Q188.68.71 181.74.71q-2.05 0-3.43-1.38-1.38-1.38-1.38-3.25t1.6-5.69q-4 4.98-8.58 7.7Q165.36.8 162.78.8t-4.4-1.56q-1.83-1.55-1.83-3.87 0-6.58 5.87-12.9 4.45-4.72 11.04-6.68 2.94-.98 5.74-.98 2.8 0 5.43 1.56t3.34 3.69q2.67 0 3.82 1.96.18.27.18.89 0 .63-.66 1.43-.67.8-1.65 1.95Zm-6.5-8.81q-1.87 0-4.45 1.16-4.54 1.96-8.63 6.76-6.5 7.66-6.5 11.22 0 1.87 1.51 1.87 1.25 0 4.14-1.6 2.9-1.61 7.61-6.32.27-.27 2.05-1.96 1.78-1.69 3.03-2.94 4.18-4.36 4.18-6.27 0-1.92-2.94-1.92Zm58.21 2.67q0 3.3-5.61 10.86-3.38 4.54-3.38 5.61 0 1.07 1.11 1.07t3.16-1.34q5.07-3.47 10.15-8.36.71-.72.98-.36.26.36.26.53 0 .18-1.96 2.05-1.95 1.87-4.31 3.92-2.36 2.04-5.92 4.22-3.56 2.18-5.87 2.18-4.81 0-4.81-4.27 0-1.51.53-3.56 1.16-3.47 10.06-13.44 1.16-1.24 1.16-1.96 0-.71-1.78-.71t-5.61 3.12q-1.33 1.07-3.29 3.16t-4.59 6.72q-2.62 4.62-3.87 8.18-.53 1.61-2.13 1.61-.36 0-.89-.09-1.69-.45-1.34-1.6 6.94-12.37 8.28-15.49 1.33-3.11 1.33-4.45 0-1.33-1.06-1.33-4.72 0-13.53 15.39-3.21 4.99-5.16 7.12-1.96 2.14-3.56 2.14h-.36q-2.31 0-4.54-1.87.53-.8 2.58-3.47 4.54-5.52 7.92-10.68-3.82 3.82-6.49 5.96-.89.71-1.03.09-.13-.62.4-1.11.54-.49 1.78-1.6 1.25-1.12 1.65-1.47.4-.36 1.51-1.38 1.11-1.03 1.65-1.65 2.49-2.94 3.65-4.98.44-1.07.4-2.09-.05-1.03-.45-1.34-.4-.31-.31-.76 0-.71.71-.71.36 0 .8.18 2.76 1.25 2.76 5.43 0 2.49-.98 5.43 1.78-2.76 3.83-5.43 3.65-4.72 7.3-4.72 2.49 0 2.49 2.85 0 2.67-3.74 9.52 3.74-4.8 5.79-7.03 4.72-4.89 9.08-4.89 4.62 0 5.25 4v.8Z'
      transform='translate(126.855 107.57)'
    />
  </Svg>
)