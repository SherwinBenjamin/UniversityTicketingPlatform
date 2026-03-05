import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import useStaff from "../Staffs/useStaff";
import { Spinner } from "@chakra-ui/react";
const StaffContext = React.createContext({});

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isLoading, staffData, isAuthenticated } = useStaff();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, navigate, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="bg-nBlack w-screen h-screen flex justify-center item-center ">
        <Spinner color="white" />
      </div>
    );
  }

  if (isAuthenticated)
    return (
      <StaffContext.Provider value={staffData}>
        <Outlet />
      </StaffContext.Provider>
    );
};

export { ProtectedRoutes };
