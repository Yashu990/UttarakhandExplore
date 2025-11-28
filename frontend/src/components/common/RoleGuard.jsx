import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { canAccess } from '../../utils/roles';

/**
 * RoleGuard component - Protects routes based on user role
 * Usage: <RoleGuard requiredRole={ROLES.ADMIN}><AdminComponent /></RoleGuard>
 */
const RoleGuard = ({ children, requiredRole, fallbackPath = '/' }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        // Check role permission
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);

            if (!canAccess(user, requiredRole)) {
                // User doesn't have required role
                navigate(fallbackPath);
                return;
            }
        } else {
            navigate('/login');
        }
    }, [navigate, requiredRole, fallbackPath]);

    // If we get here, user has access
    return <>{children}</>;
};

export default RoleGuard;
