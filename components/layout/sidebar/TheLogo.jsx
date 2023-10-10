/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/" >
            <span className="inline-flex items-center justify-center h-20 w-full bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 cursor-pointer">
                <title>Company logo</title>
                <Image src="/images/favicon.png" alt="Image Description" width={50} height={50} className="h-12 w-14" />
            </span>
        </Link>
    );
};

export default Logo;