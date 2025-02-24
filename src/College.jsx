import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const College = () => {
    return (
        <>
            <div>College Pages</div>
            <nav>
                <NavLink to='student'>Student</NavLink>
                <NavLink to='department'>Department</NavLink>
                <NavLink to='collegedetailes'>College Details</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default College;
