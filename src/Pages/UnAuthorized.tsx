import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate("/");
    }
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">403</h1>
        <h2 className="mt-4 text-2xl font-semibold text-azure-radiance-700">
          Access Denied
        </h2>
        <p className="mt-2 text-azure-radiance-600">
          You do not have permission to view this page.
        </p>
        <div className="mt-6">
          <button
            onClick={handleNavigate}
            className="px-6 py-2 text-mine-shaft-200 bg-azure-radiance-800 rounded-lg "
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UnauthorizedPage;
