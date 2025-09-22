const STORAGE_KEY = 'users';

export function getSampleUsers() {
    return [
        { id: 101, firstName: "Alice", lastName: "Smith", email: "alice@company.com", department: "HR", role: "Manager" },
        { id: 102, firstName: "Bob", lastName: "Johnson", email: "bob@company.com", department: "Engineering", role: "Developer" },
        { id: 103, firstName: "Clara", lastName: "Williams", email: "clara@company.com", department: "Finance", role: "Analyst" },
        { id: 104, firstName: "Amit", lastName: "Verma", email: "amit.verma@example.com", department: "Engineering", role: "Frontend Developer" },
        { id: 105, firstName: "Priya", lastName: "Rao", email: "priya.rao@example.com", department: "Design", role: "UX Designer" },
        { id: 106, firstName: "Ravi", lastName: "Patel", email: "ravi.patel@example.com", department: "HR", role: "Recruiter" },
        { id: 107, firstName: "Sneha", lastName: "Kulkarni", email: "sneha.kulkarni@example.com", department: "Finance", role: "Accountant" },
        { id: 108, firstName: "Arjun", lastName: "Mehta", email: "arjun.mehta@example.com", department: "Engineering", role: "Backend Developer" },
        { id: 109, firstName: "Neha", lastName: "Sharma", email: "neha.sharma@example.com", department: "Marketing", role: "Content Strategist" },
        { id: 110, firstName: "Karan", lastName: "Desai", email: "karan.desai@example.com", department: "Engineering", role: "DevOps Engineer" },
        { id: 111, firstName: "Anjali", lastName: "Joshi", email: "anjali.joshi@example.com", department: "Sales", role: "Account Executive" },
        { id: 112, firstName: "Vikas", lastName: "Gupta", email: "vikas.gupta@example.com", department: "Design", role: "Graphic Designer" },
        { id: 113, firstName: "Meena", lastName: "Singh", email: "meena.singh@example.com", department: "Support", role: "Customer Support" },
        { id: 114, firstName: "Farhan", lastName: "Ali", email: "farhan.ali@example.com", department: "Legal", role: "Compliance Officer" },
        { id: 115, firstName: "Divya", lastName: "Chawla", email: "divya.chawla@example.com", department: "Engineering", role: "QA Tester" },
        { id: 116, firstName: "Raj", lastName: "Kapoor", email: "raj.kapoor@example.com", department: "Management", role: "Project Manager" },
        { id: 117, firstName: "Tina", lastName: "D'Souza", email: "tina.dsouza@example.com", department: "Engineering", role: "Full Stack Developer" },
        { id: 118, firstName: "Manish", lastName: "Aggarwal", email: "manish.aggarwal@example.com", department: "IT", role: "System Administrator" },
        { id: 119, firstName: "Lavanya", lastName: "Reddy", email: "lavanya.reddy@example.com", department: "Finance", role: "Auditor" },
        { id: 120, firstName: "Hari", lastName: "Mohan", email: "hari.mohan@example.com", department: "HR", role: "Benefits Coordinator" },
        { id: 121, firstName: "Geeta", lastName: "Malhotra", email: "geeta.malhotra@example.com", department: "Engineering", role: "Tech Lead" },
        { id: 122, firstName: "Siddharth", lastName: "Jain", email: "siddharth.jain@example.com", department: "Marketing", role: "SEO Specialist" },
        { id: 123, firstName: "Rashmi", lastName: "Bhatt", email: "rashmi.bhatt@example.com", department: "Design", role: "Product Designer" }
    ];
}

export function loadUsers() {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!users) {
        const sampleUsers = getSampleUsers();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleUsers));
        return sampleUsers;
    }
    return users;
}

export function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}
