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
        <div style={{ display: "flex", height: '100px' }}>
            <div style={{ flex: "2", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Link href="./" style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                    <h1 className="absolute left-0" style={{ flex: "1", left: '20px', fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
                        <span style={{ color: '#DB2A6B' }}>Gath</span>Session<span style={{ color: '#DB2A6B' }}>.</span>
                    </h1>
                </Link>
            </div>
           <div style={{ flex:"1"}}></div>

            <div style={{ display: "flex", flex: "2", alignItems: 'center' }}>
                <Link href="./" style={{ fontSize: '18px', flex: "1",textAlign:"center" }}>Home</Link>
                <Link href="./features" style={{ fontSize: '18px', flex: "1",textAlign:"center" }}>Features</Link>
                <Link href="./blog" style={{ fontSize: '18px', flex: "1" ,textAlign:"center"}}>Blog</Link>
                <Link href="./contact" style={{ fontSize: '18px', flex: "1" ,textAlign:"center"}}>Contact</Link>
                <Link href="./aboutUs" style={{ fontSize: '18px', flex: "1" ,textAlign:"center"}}>About us</Link>
            </div>

        <div style={{ display: "flex", flex: "2", alignItems: 'center', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Dropdown menu={{ items }} style={{ flex: "1" }}>
                    <Space>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M8.25 12h12.25M12 17.25h8.25" />
                        </svg>
                    </Space>

                </Dropdown>
        </div>

        </div>

    )
}


export default Header
