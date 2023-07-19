import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {

    const router = useRouter()

    setTimeout(() => {
        router.push('/')
    }, 5000)
    return (
        <div>
            <img src='https://media.istockphoto.com/id/1142986365/vector/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-design-modern-vector.jpg?s=612x612&w=0&k=20&c=E0Y1GZsaRrEk-a2eW49WKCjRFd9SS1MitZ6Vly1HAs8=' alt='error' width="100%" />
        </div >
    );
};

export default ErrorPage;