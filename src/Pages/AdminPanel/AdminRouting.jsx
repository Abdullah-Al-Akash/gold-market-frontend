import { Link } from "react-router-dom";

export const adminRouting = (
  <>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li>
        <Link to="/profile">Home</Link>
      </li>
      <li>
        <Link to="admin/update-gold-rate">Update Gold Rate</Link>
      </li>
      <li>
        <Link to="admin/users">User List</Link>
      </li>
      <li>
        <Link>Pending Request</Link>
      </li>
      <li>
        <Link> Transaction History</Link>
      </li>
    </ul>
  </>
);
