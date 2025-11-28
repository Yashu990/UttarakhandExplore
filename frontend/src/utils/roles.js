// User roles for the platform
export const ROLES = {
    USER: 'user',           // Can read, comment, like
    CONTRIBUTOR: 'contributor', // Can submit stories + all USER permissions
    ADMIN: 'admin'          // Full access + all CONTRIBUTOR permissions
};

// Permission checks
export const hasPermission = (userRole, requiredRole) => {
    const roleHierarchy = {
        [ROLES.USER]: 1,
        [ROLES.CONTRIBUTOR]: 2,
        [ROLES.ADMIN]: 3
    };

    return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

// Check if user can access a feature
export const canAccess = (user, requiredRole) => {
    if (!user || !user.role) return false;
    return hasPermission(user.role, requiredRole);
};
