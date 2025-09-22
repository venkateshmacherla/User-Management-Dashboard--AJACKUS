import React, { useState, useEffect } from 'react';
import { loadUsers, saveUsers } from '../services/userService';
import { validateUser } from '../utils/validation';

export default function UserFormPage() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        role: ''
    });
    const [errors, setErrors] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        const loadedUsers = loadUsers();
        setUsers(loadedUsers);

        const editId = localStorage.getItem('editUserId');
        if (editId) {
            const user = loadedUsers.find(u => u.id === parseInt(editId));
            if (user) {
                setFormData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    department: user.department,
                    role: user.role
                });
                setEditingId(parseInt(editId));
            }
        }
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateUser(formData)) {
            setErrors('Please fill all fields with a valid email.');
            return;
        }

        let updatedUsers;
        if (editingId) {
            updatedUsers = users.map(u => u.id === editingId ? { ...u, ...formData } : u);
            localStorage.removeItem('editUserId');
        } else {
            const newUser = { ...formData, id: Date.now() };
            updatedUsers = [...users, newUser];
            alert('✅ User added successfully!');
        }
        saveUsers(updatedUsers);
        window.location.href = '/'; // back to list
    }

    function handleCancel() {
        window.location.href = '/';
    }

    const departments = ["HR", "Engineering", "Finance", "IT", "Marketing", "Sales", "Support", "Operations", "Product", "Design", "Research", "Customer Service", "Administration"];
    const roles = ["Manager", "Developer", "Analyst", "Designer", "Tester", "Administrator", "Executive", "Intern", "Marketing Specialist", "Project Manager", "Operations Manager", "Product Manager", "Data Scientist", "Business Analyst", "Quality Assurance"];

    return (
        <>
            <header className="top-bar">
                <div className="left-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <h1 style={{ margin: 0 }}>
                        <a href="/" className="header-link" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                            User Management Dashboard
                        </a>
                    </h1>
                </div>
            </header>
            <main className="form-page">
                <section className="form-card">
                    <h2>{editingId ? "Edit User" : "Add User"}</h2>
                    <form id="userForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form-group two-cols">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="department">Department</label>
                                <select name="department" id="department" value={formData.department} onChange={handleChange} required>
                                    <option value="">Select Department</option>
                                    {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" value={formData.role} onChange={handleChange} required>
                                <option value="">Select Role</option>
                                {roles.map(role => <option key={role} value={role}>{role}</option>)}
                            </select>
                        </div>
                        <div className="error-text">{errors}</div>
                        <div className="form-actions">
                            <button type="button" onClick={handleCancel}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </section>
            </main>
            <footer className="app-footer">
                <h2>© 2025 User Directory App. All rights reserved</h2>
            </footer>
        </>
    );
}
