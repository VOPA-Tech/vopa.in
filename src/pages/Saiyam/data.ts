// types
import { Integration, PlanFeature, Slide } from './types';

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

const slides: Slide[] = [
    {
        statement:
            '"Don\'t eat tobacco! You\'ll get sick. Addiction is not good!" — These are the words of Shreyas Karjkar, a 9th-grade student from Swa. T. G. Gosavi Secondary and Higher Secondary School in Vitthalwadi, Pune. Whenever Shreyas sees anyone around him indulging in any kind of addiction, he appeals to them to stay away from such habits. Through the V-School app, the Vowels of the People Association and the Ramnath Tarachand Seva Trust have made the Saiyam educational program available for children. Inspired by this program, Shreyas has now voluntarily taken up the role of a Saiyam Social Warrior.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'Shreyas Karjkar',
            designation: 'Grade 9, Swa. T. G. Gosavi Secondary and Higher Secondary School, Pune.',
        },
        logo: 'Amazon',
    },
    {
        statement:
            'After watching the Saiyam course, I understood how we get addicted and what we should do after becoming addicted. This course had lessons on the harmful effects of tobacco, mobile addiction, etc. It explained in a very simple way how we get addicted and what effects addiction has on our health. I really liked the Saiyam course. From the lesson on the harmful effects of alcohol, I understood what effects alcohol has on a person and how dangerous alcohol is for our body. I learned so much from watching this course.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'Akshara',
            designation: '7th Grade, Nanded',
        },
        logo: 'Amazon',
    },
    {
        statement:
            "Before this, I didn't know what things cause addiction. I knew a little, but not everything. After studying this course, I understood what causes addiction and how we can free ourselves from it. I also learned about the harmful effects of alcohol, mobile phones, and tobacco. And finally, through the self-help lesson, I saw how we can get out of all these things. By watching the different things in it, I understood all the lessons clearly. I learned many new things after studying this course. For this, I thank V School.",
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'Akshara',
            designation: '7th Grade, Nanded',
        },
        logo: 'Amazon',
    },
];

export { planFeatures, slides };
