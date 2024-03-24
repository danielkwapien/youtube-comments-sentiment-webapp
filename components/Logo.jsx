import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@logo/logo_nobg.png'
import { AspectRatio } from '@components/ui/aspect-ratio'

function Logo() {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-24'>
            <AspectRatio ratio={500/85} className='flex items-center justify-center'>
                <Image src={LogoImage} alt="Logo" layout="fill" className='dark:filter dark:invert'/>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo