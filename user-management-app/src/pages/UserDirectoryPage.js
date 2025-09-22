import React, { useState, useEffect } from 'react';
import { loadUsers, saveUsers, getSampleUsers } from '../services/userService';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import FilterSidebar from '../components/FilterSidebar';

export default function UserDirectoryPage() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDepartment, setFilterDepartment] = useState('');
    const [filterRole, setFilterRole] = useState('');
    const [pageLimit, setPageLimit] = useState(10);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        let loadedUsers = loadUsers();
        setUsers(loadedUsers);
    }, []);

    function handleEdit(id) {
        localStorage.setItem('editUserId', id);
        window.location.href = '/user-form'; // React Router route for form page 
    }

    function handleDelete(id) {
        if (window.confirm('Delete this user?')) {
            const updatedUsers = users.filter(u => u.id !== id);
            setUsers(updatedUsers);
            saveUsers(updatedUsers);
        }
    }

    const normalizedQuery = searchQuery.toLowerCase();

    function filteredUsers() {
        return users.filter(u => {
            const matchesSearch =
                u.firstName.toLowerCase().includes(normalizedQuery) ||
                u.lastName.toLowerCase().includes(normalizedQuery) ||
                u.email.toLowerCase().includes(normalizedQuery);

            const matchesDept = !filterDepartment || u.department === filterDepartment;
            const matchesRole = !filterRole || u.role === filterRole;

            return matchesSearch && matchesDept && matchesRole;
        }).slice(0, pageLimit);
    }

    const departments = [...new Set(users.map(u => u.department))];
    const roles = [...new Set(users.map(u => u.role))];

    return (
        <>
            <header className="top-bar">
                <div className="left-section">
                    <h1><a href="/" className="header-link">User Management Dashboard</a></h1>
                    <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                </div>
                <div className="right-section">
                    <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
                    <button className="add-btn" onClick={() => {
                        localStorage.removeItem('editUserId');
                        window.location.href = '/user-form';
                    }}>Add User</button>
                </div>
            </header>
            <FilterSidebar
                visible={showFilter}
                departments={departments}
                roles={roles}
                filterDepartment={filterDepartment}
                filterRole={filterRole}
                onDepartmentChange={setFilterDepartment}
                onRoleChange={setFilterRole}
                pageLimit={pageLimit}
                onPageLimitChange={setPageLimit}
            />
            <main>
                <UserList users={filteredUsers()} onEdit={handleEdit} onDelete={handleDelete} />
            </main>
            <footer className="app-footer">
                <h2>© 2025 User Directory App. All rights reserved</h2>
            </footer>
        </>
    );
}
