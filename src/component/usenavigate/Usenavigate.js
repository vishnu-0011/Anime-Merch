import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location); // logs current route details

  const move = () => {
    navigate('/usestate'); // navigates to /usestate page
  };

  return (
    <>
      <div className="homecontainer">
        {/* Your home content here */}
      </div>

      <button onClick={move} className="btn btn-primary mt-3">
        Move to Usestate example page
      </button>
    </>
  );
};

export default AdminLayout;
