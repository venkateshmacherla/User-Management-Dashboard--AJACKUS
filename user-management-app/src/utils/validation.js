export function validateUser(user) {
    return (
        user.firstName.trim() && user.lastName.trim() && user.email.trim() &&
        user.department.trim() && user.role.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)
    );
}
