// types
import { Project, Task } from './types';

const projects: Project[] = [
    {
        time: 'Aug 09, 2020',
        title: 'Shreyu - Design Updates',
        state: {
            name: 'Designing',
            variant: 'primary',
        },
        description: 'Update shreyu with modern and latest trends...',
        progress: {
            value: 75,
            variant: 'success',
        },
        member: ['/images/aboutUs/vopaStaff/rutujaJeve.jpg', '/images/aboutUs/vopaStaff/rutujaJeve.jpg'],
    },
    {
        time: 'Aug 10, 2020',
        title: 'Prompt v2.0',
        state: {
            name: 'Planning',
            variant: 'orange',
        },
        description: 'Plan new features and functionality for prompt...',
        progress: {
            value: 50,
            variant: 'danger',
        },
        member: ['/images/aboutUs/vopaStaff/rutujaJeve.jpg', '/images/aboutUs/vopaStaff/rutujaJeve.jpg'],
    },
    {
        time: 'Aug 11, 2020',
        title: 'Hyper React v4.0',
        state: {
            name: 'Development',
            variant: 'info',
        },
        description: 'Update shreyu with modern and latest trends...',
        progress: {
            value: 60,
            variant: 'warning',
        },
        member: ['/images/aboutUs/vopaStaff/rutujaJeve.jpg', '/images/aboutUs/vopaStaff/rutujaJeve.jpg'],
    },
];

const tasks: Task[] = [
    {
        id: 1,
        title: 'Draft the new contract document for sales team',
        time: 'Today 10pm',
        variant: 'info',
        taskRatio: {
            completedTask: 3,
            totalTask: 7,
        },
        comment: 21,
        priority: 'High',
    },
    {
        id: 2,
        title: 'iOS App home page design',
        time: 'Today 5pm',
        variant: 'info',
        taskRatio: {
            completedTask: 10,
            totalTask: 11,
        },
        comment: 5,
        priority: 'Medium',
    },
    {
        id: 3,
        title: 'Enable analytics tracking',
        time: 'Tomorrow 5pm',
        variant: 'secondary',
        taskRatio: {
            completedTask: 5,
            totalTask: 11,
        },
        comment: 7,
        priority: 'Medium',
    },
    {
        id: 4,
        title: 'Kanban board design',
        time: 'Sep 11, 3pm',
        variant: 'secondary',
        taskRatio: {
            completedTask: 0,
            totalTask: 5,
        },
        comment: 3,
        priority: 'Low',
    },
];

export { projects, tasks };
