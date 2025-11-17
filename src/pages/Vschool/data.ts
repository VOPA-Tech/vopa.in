// types
import { Integration, PlanFeature, Project } from './types';

// // images
// import slack from 'assets/images/brands/slack.png';
// import fb from 'assets/images/brands/fb.png';
// import salesforce from 'assets/images/brands/salesforce.jpg';
// import at from 'assets/images/brands/at.png';
// import gsheet from 'assets/images/brands/gsheet.png';
// import ac from 'assets/images/brands/ac.jpeg';

// const integrations: Integration[] = [
//     {
//         appLogo: slack,
//         app: 'Slack',
//         description:
//             'Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
//     },
//     {
//         appLogo: fb,
//         app: 'Facebook Lead Ads',
//         description:
//             'Facebook lead ads make signing up for business information easy for people and more valuable for businesses',
//     },
//     {
//         appLogo: salesforce,
//         app: 'Salesforce',
//         description: 'Salesforce is a leading enterprise customer relationship manager (CRM) application',
//     },
//     {
//         appLogo: at,
//         app: 'Airtable',
//         description: 'Organize anything with Airtable, a modern database created for everyone',
//     },
//     {
//         appLogo: gsheet,
//         app: 'Google Sheets',
//         description: 'Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data',
//     },
//     {
//         appLogo: ac,
//         app: 'ActiveCampaign',
//         description: 'ActiveCampaign combines all aspects of email marketing into a single and easy- to - use platform',
//     },
// ];

const planFeatures: PlanFeature[] = [
    {
        name: 'Landing pages',
        starter: {
            available: true,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Drag-and-drop editor',
        starter: {
            available: false,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Email marketing',
        starter: {
            available: true,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Ad retargeting',
        starter: {
            available: false,
            addon: true,
        },
        professional: {
            available: false,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Messenger integration',
        starter: {
            available: false,
        },
        professional: {
            available: false,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Live chat',
        starter: {
            available: false,
        },
        professional: {
            available: false,
            addon: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'Conversational bots',
        starter: {
            available: false,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
    {
        name: 'SEO recommendations & optimizations',
        starter: {
            available: false,
        },
        professional: {
            available: true,
        },
        enterprise: {
            available: true,
        },
    },
];

const projects: Project[] = [
    {
        field: 'Education',
        title: 'V-School',
        description:
            'V-School, by Vowels of the People Association (VOPA), offers free education through an Android app with an ecosystem approach serving students, parents, teachers, and administrators, empowering quality learning across Maharashtra.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262069_vschool.webp',
        link: '/projects/vschool',
    },
    {
        field: 'Education',
        title: 'Nipun Maharashtra',
        description:
            'Nipun Bharat, a Maharashtra, focuses on enhancing foundational literacy and numeracy for children in the state, with VOPA supporting the program through digital tools and resources aimed at improving learning outcomes.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262067_nipun.png',
        link: '/projects/nipun-bharat',
    },
    {
        field: 'Health',
        title: 'MYCA (My Mental Health Companion)',
        description:
            'MYCA, a mental health initiative by VOPA, is a free mobile platform providing access to self-help tools, self assessment tools , and support to individuals, promoting mental well-being across Maharashtra with a focus of accessibility and inclusivity.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262064_myca.png',
        link: '/projects/myca',
    },
    {
        field: 'Education',
        title: 'School Transformation Project (STP)',
        description:
            'Digital Learning Project implements cutting-edge digital tools and resources to enhance learning experiences, providing interactive and engaging educational content that transforms traditional teaching methods across Maharashtra schools.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262076_stp.png',
        link: '/projects/digital-learning-project',
    },
    {
        field: 'Education',
        title: 'Digital Learning Project (DLP)',
        description:
            'Comprehensive program to modernize schools and enhance teacher capabilities through innovative training methodologies, digital literacy programs, and infrastructure development to create 21st-century learning environments.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262072_dlp.webp',
        link: '/projects/digital-learning-project',
    },
    {
        field: 'Health',
        title: 'Saiyam',
        description:
            'The Saiyam Olympiad is an educational program that raises awareness about addiction prevention and helps students develop life skills through interactive school activities and digital modules.',
        image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762145020861_img1.png',
        link: '/projects/saiyam',
    },
];

export { planFeatures, projects };
