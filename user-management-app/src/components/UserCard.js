import React from 'react';

export default function UserCard({ user, onEdit, onDelete }) {
    return (
        <div className="employee-card">
            <h3>{user.firstName} {user.lastName}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Department:</strong> {user.department}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <div className="actions">
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
        </div>
    );
}
