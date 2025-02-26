// utils/roleUtils.js
export const hasRole = (userRoles, requiredRole) => {
    return userRoles.includes(requiredRole);
};