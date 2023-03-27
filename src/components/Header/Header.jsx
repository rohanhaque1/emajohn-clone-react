import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <>
            <div className="bg-slate-900 px-20 py-6 flex justify-between items-center">
                <img className="cursor-pointer" src={logo} alt="" />
                <div className="text-white space-x-8">
                    <a className="hover:text-yellow-600" href="#">Order</a>
                    <a className="hover:text-yellow-600" href="#">Order Review</a>
                    <a className="hover:text-yellow-600" href="#">Manage Inventory</a>
                    <a className="hover:text-yellow-600" href="#">Login</a>
                </div>
            </div>   
        </>
    );
};

export default Header;