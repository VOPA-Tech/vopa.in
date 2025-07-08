// src/api/fetchTeam.js

export const fetchTeamMembers = async () => {
    const token = 'kCKFLVcCUY4HXnQ2HIDkZAtt'; // replace with env var in production
    const version = 'published'; // or 'draft'
    const starts_with = 'team_members'; // your folder slug
    try {
        const response = await fetch(
            `https://api.storyblok.com/v2/cdn/stories?starts_with=${starts_with}&per_page=100&version=${version}&token=${token}`
        );
        const data = await response.json();
        return data.stories || [];
    } catch (err) {
        console.error('Failed to fetch team members:', err);
        return [];
    }
};
