import React from 'react'

const Footer = () => {
    const today = new Date()
    return (
        <footer className="inset-x-0 fixed bottom-0 text-center opacity-50">
            {today.getFullYear()}
        </footer>
    )
}

export default Footer
