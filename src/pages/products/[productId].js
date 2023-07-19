import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>THis is Dynamic of product {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetailsPage;