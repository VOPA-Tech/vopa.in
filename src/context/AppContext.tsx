// src/context/AppContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchBlogs } from '../api/fetchBlogs';
import { fetchTeamMembers } from '../api/fetchTeam'; // 👈 You'll need to create this

type Blog = any;
type TeamMember = any; // Ideally create proper interfaces

type AppContextType = {
    isDonationModalOpen: boolean;
    setIsDonationModalOpen: (value: boolean) => void;

    blogs: Blog[];
    isBlogsLoading: boolean;

    teamMembers: TeamMember[];
    isTeamLoading: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isBlogsLoading, setIsBlogsLoading] = useState(true);

    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isTeamLoading, setIsTeamLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const data = await fetchBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to load blogs:', error);
            } finally {
                setIsBlogsLoading(false);
            }
        };

        const loadTeam = async () => {
            try {
                const data = await fetchTeamMembers();
                setTeamMembers(data);
            } catch (error) {
                console.error('Failed to load team members:', error);
            } finally {
                setIsTeamLoading(false);
            }
        };

        loadBlogs();
        loadTeam();
    }, []);

    return (
        <AppContext.Provider
            value={{
                isDonationModalOpen,
                setIsDonationModalOpen,
                blogs,
                isBlogsLoading,
                teamMembers,
                isTeamLoading,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used inside AppProvider');
    return context;
};
