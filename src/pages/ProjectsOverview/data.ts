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

const projects: Project[] = [
    {
        field: 'Education',
        title: 'V-School',
        description: 'Learning that speaks your language.',
        image: '/images/projectImages/vschool.jpg',
    },
    {
        field: 'Education',
        title: 'School Transformation Project (STP)',
        description: 'Building future-ready schools, one classroom at a time.',
        image: '/images/projectImages/stp.jpg',
    },
    {
        field: 'Education',
        title: 'Digital Learning Project (DLP)',
        description: 'Bringing smart learning to real classrooms',
        image: '/images/projectImages/dlp.jpg',
    },
    {
        field: 'Health',
        title: 'Raste ki Pathshala',
        description: 'Safer roads begin in our schools.',
        image: '/images/projectImages/roadSafety.jpg',
    },
    {
        field: 'Health',
        title: 'MYCA (My Mental Health Companion)',
        description: 'Mental health support, in the language of trust.',
        image: '/images/projectImages/myca.jpg',
    },
];

const slides: Slide[] = [
    {
        statement:
            'माझे नाव राज गोरे आहे. मी बीड जिल्ह्यात राहतो. मी इयत्ता दहावीचा विद्यार्थी आहे. लॉकडाऊनपासुन मला दहावीचा अभ्यास कसा करायचा हे कळत नव्हते. मला खूप टेन्शन येत होते. त्यावेळी मला V-School विषयी समजले. VOPA या संस्थेने निर्माण केलेल्या V-School या प्लॅटफॉर्ममुळे मला दहावीचा अभ्यास करणे शक्य झाले.मला ऑनलाईन अभ्यास करत असताना व्हिडिओ शोधायला खूप वेळा लागायचा. VOPAमुळे आता मला चांगले व्हिडिओ शोधावे लागत नाहीत',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'राज गोरे, बीड',
            designation: 'v-School User',
        },
        logo: 'Amazon',
    },
    {
        statement:
            'VOPA चे शिक्षणातील काम हे जगातील एक नंबर काम असेल, हे माझ्या एकट्याचे नाही, तर इतर बऱ्याच विद्यार्थ्यांचे मत असेल; यात काडीमात्र वाद नाही.मी शुभम, जुन्नर तालुक्यात राहतो. कोरोनामुळे माझी शाळा बंद आहे. मी ग्रामीण भागातील शाळेत शिकत असल्यामुळे आमचे ऑनलाईन क्लासही सुरू नव्हते. त्या काळात मी VOPA संस्थेच्या अभ्यासवर्गाशी जोडलो गेलो आणि त्यामुळे माझा थांबलेला अभ्यास पुन्हा जोमाने सुरू झाला.',
        customer: {
            avatar: '/images/aboutUs/vopaStaff/rutujaJeve.jpg',
            name: 'शुभम, जुन्नर',
            designation: 'v-School User',
        },
        logo: 'Amazon',
    },
];

export { planFeatures, blogPosts, projects, slides };
