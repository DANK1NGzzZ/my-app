import React from 'react'
import Link from 'next/link'
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
const Header = () => {

    const items = [
        {
            label: (
                React.createElement('a', {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://www.antgroup.com'
                }, '1st menu item')
            ),
            key: '0',
        },
        {
            label: (
                React.createElement('a', {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://www.aliyun.com'
                }, '2nd menu item')
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item（disabled）',
            key: '3',
            disabled: true,
        },
    ];
    //#DB2A6B"
    return (
        <div className="flex h-20">
        <div className="flex-2 flex justify-center items-center">
            <a href="./" className="text-center flex items-center">
                <h1 className="absolute left-0 flex-1 left-20 text-4xl font-bold">
                    <span className="text-pink-600">Gath</span>Session<span className="text-pink-600">.</span>
                </h1>
            </a>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-2 items-center">
            <a href="./" className="text-lg flex-1 text-center">Home</a>
            <a href="./features" className="text-lg flex-1 text-center">Features</a>
            <a href="./blog" className="text-lg flex-1 text-center">Blog</a>
            <a href="./contact" className="text-lg flex-1 text-center">Contact</a>
            <a href="./aboutUs" className="text-lg flex-1 text-center">About us</a>
        </div>
        <div className="flex flex-2 items-center justify-end">
            <div className="relative">
                {/* Assume Dropdown component handles styling */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mx-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M8.25 12h12.25M12 17.25h8.25" />
                </svg>
            </div>
        </div>
    </div>
    
    )
}


export default Header
