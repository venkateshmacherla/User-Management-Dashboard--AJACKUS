import React from 'react';
import UserCard from './UserCard';

export default function UserList({ users, onEdit, onDelete }) {
    if (users.length === 0) return <p>No users found.</p>;

    return (
        <div id="employeeContainer" style={{ display: 'grid', gap: 16, padding: 20 }}>
            {users.map(user => (
                <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
}
