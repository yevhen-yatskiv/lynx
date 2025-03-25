import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import yyLogo from './assets/yy-logo.png'

export function App() {
  const [alterLogo, setAlterLogo] = useState(0)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo((prevLogo) => {
      const newLogo = (prevLogo + 1) % 3;
      return newLogo;
    });
  }, [alterLogo]);

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            {alterLogo === 0 && <image src={yyLogo} className='Logo--yy' />}
            {alterLogo === 1 && <image src={lynxLogo} className='Logo--lynx' />}
            {alterLogo === 2 && <image src={reactLynxLogo} className='Logo--react' />}
          </view>
          <text className='Title'>React</text>
          <text className='Subtitle'>on Lynx</text>
          <text className='Version'>0.0.1</text>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow'/>
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>to see updates!</text>
        </view>
      </view>
    </view>
  )
}
