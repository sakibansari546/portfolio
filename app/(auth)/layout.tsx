import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen flex items-center justify-center w-full'>
            {children}
        </div>
    )
}

export default Layout
