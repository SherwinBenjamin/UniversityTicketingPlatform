import { Outlet, useNavigate } from "react-router-dom";
import useUser from "./useUser";
import React, { useEffect } from "react";
const UserContext = React.createContext({});

const ProtectedRoutes = () => {
	const navigate = useNavigate();
	const { isLoading, user, isAuthenticated, redirectUrl } = useUser();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			navigate(redirectUrl);
		}
	}, [isLoading, navigate, redirectUrl, isAuthenticated]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && isAuthenticated)
		return (
			<UserContext.Provider value={user}>
				<Outlet />
			</UserContext.Provider>
		);
};

const useUserContext = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

export { useUserContext, ProtectedRoutes };
