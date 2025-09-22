import React from 'react';

export default function FilterSidebar({ departments, roles, filterDepartment, filterRole, onDepartmentChange, onRoleChange, pageLimit, onPageLimitChange, visible }) {
    if (!visible) return null;
    return (
        <aside className="filter-section" style={{ padding: 20 }}>
            <label className="filter-label">
                Department:
                <select className="filter-dropdown" value={filterDepartment} onChange={(e) => onDepartmentChange(e.target.value)}>
                    <option value="">All Departments</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
            </label>
            <label className="filter-label">
                Role:
                <select className="filter-dropdown" value={filterRole} onChange={(e) => onRoleChange(e.target.value)}>
                    <option value="">All Roles</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
            </label>
            <label className="page-limit-label">
                Show:
                <select value={pageLimit} onChange={(e) => onPageLimitChange(Number(e.target.value))}>
                    {[10, 25, 50, 100].map(limit => (
                        <option key={limit} value={limit}>{limit}</option>
                    ))}
                </select>
            </label>
        </aside>
    );
}
