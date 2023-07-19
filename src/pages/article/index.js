import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ArticalPage = () => {
    return (
        <div>
            <h1>This is articale Home Page</h1>
            <Button type='primary'>
                <Link href="/">Home</Link >
            </Button>
        </div>
    );
};

export default ArticalPage;