import React from 'react';
import DasboardLayout from '../components/Layouts/DasboardLayout';

const AdminPage = () => {
    return (
        <div>
            <h1>This Admin Home Page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return (
        <DasboardLayout>
            {page}
        </DasboardLayout>
    )
}