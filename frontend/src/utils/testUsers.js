// Test Users for Multi-Portal System
// Copy these users to localStorage for testing

export const TEST_USERS = [
    // Regular User
    {
        id: 'user_001',
        name: 'John Reader',
        email: 'user@test.com',
        password: 'user123',
        role: 'user',
        createdAt: '2025-01-01T00:00:00.000Z'
    },

    // Contributor
    {
        id: 'contributor_001',
        name: 'Sarah Explorer',
        email: 'contributor@test.com',
        password: 'contributor123',
        role: 'contributor',
        contributorProfile: {
            bio: 'Travel enthusiast and adventure seeker exploring the Himalayas',
            experience: '5 years of trekking experience in Uttarakhand',
            socialLinks: {
                instagram: '@sarahexplorer',
                facebook: 'sarah.explorer'
            },
            badge: 'silver',
            approvedStoriesCount: 12
        },
        createdAt: '2024-06-15T00:00:00.000Z'
    },

    // Admin
    {
        id: 'admin_001',
        name: 'Admin User',
        email: 'admin@test.com',
        password: 'admin123',
        role: 'admin',
        createdAt: '2024-01-01T00:00:00.000Z'
    }
];

// Function to initialize test users in localStorage
export const initializeTestUsers = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Only add if not already present
    const testEmails = TEST_USERS.map(u => u.email);
    const filteredExisting = existingUsers.filter(u => !testEmails.includes(u.email));

    const allUsers = [...filteredExisting, ...TEST_USERS];
    localStorage.setItem('users', JSON.stringify(allUsers));

    console.log('Test users initialized:', TEST_USERS.map(u => `${u.email} (${u.role})`));
};

// Test credentials for easy reference
export const TEST_CREDENTIALS = {
    user: { email: 'user@test.com', password: 'user123' },
    contributor: { email: 'contributor@test.com', password: 'contributor123' },
    admin: { email: 'admin@test.com', password: 'admin123' }
};
