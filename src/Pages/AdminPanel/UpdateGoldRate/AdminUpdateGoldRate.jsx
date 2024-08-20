import React from 'react';
import UpdateGoldRate from './UpdateGoldRate';
import { adminRouting } from '../AdminRouting';

const AdminUpdateGoldRate = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          
          <UpdateGoldRate></UpdateGoldRate>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {
            adminRouting
          }
        </div>
      </div>
    );
};

export default AdminUpdateGoldRate;