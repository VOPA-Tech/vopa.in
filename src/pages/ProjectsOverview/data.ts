// types
import { BlogPost, PlanFeature, Project, Slide } from './types';

// images

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

const blogPosts: BlogPost[] = [
    {
        heading: 'Design',
        img: '',
        time: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
    },
    {
        heading: 'Development',
        img: '',
        time: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    },
    {
        heading: 'Design',
        img: 'ProjectImg2',
        time: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    },
];

const projects: any[] = [
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

const slides1: Slide[] = [
    {
        statement:
            'माझे नाव राज गोरे आहे. मी बीड जिल्ह्यात राहतो. मी इयत्ता दहावीचा विद्यार्थी आहे. लॉकडाऊनपासुन मला दहावीचा अभ्यास कसा करायचा हे कळत नव्हते. मला खूप टेन्शन येत होते. त्यावेळी मला V-School विषयी समजले. VOPA या संस्थेने निर्माण केलेल्या V-School या प्लॅटफॉर्ममुळे मला दहावीचा अभ्यास करणे शक्य झाले.मला ऑनलाईन अभ्यास करत असताना व्हिडिओ शोधायला खूप वेळा लागायचा. VOPAमुळे आता मला चांगले व्हिडिओ शोधावे लागत नाहीत',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'राज गोरे, बीड',
            designation: 'V-School User',
        },
        logo: 'Amazon',
    },
    {
        statement:
            'VOPA चे शिक्षणातील काम हे जगातील एक नंबर काम असेल, हे माझ्या एकट्याचे नाही, तर इतर बऱ्याच विद्यार्थ्यांचे मत असेल; यात काडीमात्र वाद नाही.मी शुभम, जुन्नर तालुक्यात राहतो. कोरोनामुळे माझी शाळा बंद आहे. मी ग्रामीण भागातील शाळेत शिकत असल्यामुळे आमचे ऑनलाईन क्लासही सुरू नव्हते. त्या काळात मी VOPA संस्थेच्या अभ्यासवर्गाशी जोडलो गेलो आणि त्यामुळे माझा थांबलेला अभ्यास पुन्हा जोमाने सुरू झाला.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'शुभम, जुन्नर',
            designation: 'V-School User',
        },
        logo: 'Amazon',
    },
];

const slides: Slide[] = [
    {
        statement:
            'My name is Raj Gore. I live in Beed district. I am a 10th-grade student. Since the lockdown, I didn’t know how to study for my 10th standard. I used to feel very stressed. At that time, I came to know about V-School. With the help of the V-School platform created by VOPA, I was able to study for my 10th standard. Earlier, while studying online, I had to spend a lot of time searching for videos. Thanks to VOPA, now I don’t need to search for good videos.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'Raaj Gore, Beed',
            designation: 'V-School User',
        },
        logo: 'Amazon',
    },
    {
        statement:
            'VOPA’s work in education will be number one in the world — this is not just my opinion, but the opinion of many other students as well; there is absolutely no doubt about it. My name is Shubham, and I live in Junnar taluka. Because of the coronavirus, my school was closed. Since I study in a rural school, our online classes had also not started. During that time, I joined the study sessions of the VOPA organization, and because of that, my interrupted studies started again with full energy.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'Shubham, Junnar',
            designation: 'V-School User',
        },
        logo: 'Amazon',
    },
];

export { planFeatures, blogPosts, projects, slides };
