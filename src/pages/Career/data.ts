// types
import { Benefit, GalleryItem, Vacancy } from './types';

// images
import img1 from 'assets/images/photos/3.jpg';
import img2 from 'assets/images/photos/4.jpg';
import img3 from 'assets/images/photos/5.jpg';
import img4 from 'assets/images/photos/10.jpg';

const benefits: Benefit[] = [
    {
        icon: 'compass',
        title: 'Relocation Support',
        description: "We'll help to move and get settled and handle the visa process for you",
    },
    {
        icon: 'server',
        title: 'Technology',
        description: 'A special training to get start with our technical stack by professionals',
    },
    {
        icon: 'dollar-sign',
        title: 'Growth budget',
        description: 'A specific budget for your professionals growth which you spend on throughout the year',
    },
    {
        icon: 'users',
        title: 'Team activities & retreats',
        description: "Many team building activities and retreat every quarter, so you don't get bored",
    },
    {
        icon: 'map-pin',
        title: 'Work from anywhere',
        description: 'Work from anywhere you like. We offer remote working to all the employees',
    },
    {
        icon: 'coffee',
        title: 'Work/life balance',
        description: 'Flexible work hours gives you complete balance with your personal and professional life.',
    },
];

const gallery: GalleryItem[] = [
    {
        id: 3,
        image: {
            src: '/images/aboutUs/officePhotos/office1.png',
            caption: 'Office Desks',
        },
    },
    {
        id: 4,
        image: {
            src: '/images/aboutUs/officePhotos/office2.png',
            caption: 'Meeting Room view',
        },
    },
    {
        id: 5,
        image: {
            src: '/images/aboutUs/officePhotos/office3.png',
            caption: 'Outside view',
        },
    },
    {
        id: 6,
        image: {
            src: '/images/aboutUs/officePhotos/vopaTeam.png',
            caption: 'A common seating area',
        },
    },
    {
        id: 6,
        image: {
            src: '/images/career/certificate.png',
            caption: 'A common seating area',
        },
    },
];

const vacancies: Vacancy[] = [
    {
        category: 'Engineering',
        jobs: [
            {
                designation: 'Software Engineer',
                type: 'Django, Python, AWS envirnment',
                link: 'https://drive.google.com/file/d/1CFSg6548XefiwwJMfo6G1PxPBmPoAj-y/view',
            },
            {
                designation: 'District Coordinator',
                type: 'MS Office, Report Creation, Project Management',
                link: 'https://drive.google.com/file/d/1yiQl-ak8ADUGbpIuFvjbc-t3dYJp3xZ8/view',
            },
            {
                designation: 'UI/UX Intern',
                type: 'FIGMA, HTML/CSS, User Research',
                link: 'https://drive.google.com/file/d/1dNpRcSZg-Q9tk-OPSJK4lvTgPKiBeOIe/view',
            },
            {
                designation: 'Social Media Content Developer(Intern)',
                type: 'Canva, AI tools, Social Media analytics',
                link: 'https://drive.google.com/file/d/1CxSXB6zMAwwOi6EZ9ufS3Bg9p_CclkFw/view',
            },
            {
                designation: 'Research Monitoring and Evaluation Intern',
                type: 'Data Analysis, Excel, R programming, Report Creation',
                link: 'https://drive.google.com/file/d/1CxSXB6zMAwwOi6EZ9ufS3Bg9p_CclkFw/view',
            },

            {
                designation: 'Research Monitoring and Evaluation Associate',
                type: 'Data Analysis, Excel, R programming, Report Creation',
                link: 'https://drive.google.com/file/d/1CxSXB6zMAwwOi6EZ9ufS3Bg9p_CclkFw/view',
            },

            {
                designation: 'Testing Software Engineer',
                type: 'React Native, Django/Python, AWS',
                link: 'https://drive.google.com/file/d/1f3VKeq6W6gHW2fjcgAZRTpXyuapEdTp9/view',
            },
            {
                designation: 'Content Writer',
                type: 'Content Creation & Management, PR',
                link: 'https://drive.google.com/file/d/15wzNyK6oDfomVXGq57NtsWSvykssPGCR/view',
            },
            {
                designation: 'Frontend Developer',
                type: 'React Native, Django/Python',
                link: 'https://drive.google.com/file/d/1Wyi3fNyHDIit4dI4Mf_o0n53eyO24cvM/view',
            },
        ],
    },
];

export { benefits, gallery, vacancies };
