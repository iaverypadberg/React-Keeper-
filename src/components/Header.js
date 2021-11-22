import React from 'react'
import HighlightIcon from '@mui/icons-material/Highlight';

const Header = () => {
    return (
        <header className="flex flex-row justify-start items-center bg-wisteria w-screen">
            <HighlightIcon className="opacity-70 mb-1" />

            <h1 className="text-2xl text-blue-500 p-2">
                Keeper
            </h1>
        </header>
    )
}

export default Header
