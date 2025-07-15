// types
import { Feature, Project } from './types';

const features: Feature[] = [
    {
        icon: 'mail',
        variant: 'primary',
        title: 'First feature',
        description:
            'We use a customized application tobe specifically designed a testing gnose to keep away for people.',
    },
    {
        icon: 'shield',
        variant: 'success',
        title: 'Second feature',
        description:
            'In order to design a mobile app that is going to be module downloaded and accessed frequently by users.',
    },
    {
        icon: 'sliders',
        variant: 'orange',
        title: 'Third feature',
        description: 'A Private Limited is the most popular type of partnership Malta. The limited liabilityis',
    },
    {
        icon: 'bell',
        variant: 'info',
        title: 'Fourth feature',
        description: "Few derived into talking being in merit long you'd his the of to had the to duties, it them one…",
    },
];
const projects: Project[] = [
    {
        field: 'Education',
        title: 'V-School',
        description:
            'V-School, by Vowels of the People Association (VOPA), offers free education through an Android app with an ecosystem approach serving students, parents, teachers, and administrators, empowering quality learning across Maharashtra.',
        image: '/images/homePage/projectCardImages/vschool.webp',
        link: '/projects/vschool',
    },
    {
        field: 'Education',
        title: 'Nipun Maharashtra',
        description:
            'Nipun Bharat, a Maharashtra, focuses on enhancing foundational literacy and numeracy for children in the state, with VOPA supporting the program through digital tools and resources aimed at improving learning outcomes.',
        image: '/images/homePage/projectCardImages/nipun.png',
        link: '/projects/nipun-bharat',
    },
    {
        field: 'Health',
        title: 'MYCA (My Mental Health Companion)',
        description:
            'MYCA, a mental health initiative by VOPA, is a free mobile platform providing access to self-help tools, therapy, and support to individuals, promoting mental well-being across Maharashtra with a focus of accessibility and inclusivity.',
        image: '/images/homePage/projectCardImages/myca.png',
        link: '/projects/myca',
    },
    {
        field: 'Education',
        title: 'School Transformation Project (STP)',
        description:
            'Digital Learning Project implements cutting-edge digital tools and resources to enhance learning experiences, providing interactive and engaging educational content that transforms traditional teaching methods across Maharashtra schools.',
        image: '/images/homePage/projectCardImages/stp.png',
        link: '/projects/digital-learning-project',
    },
    {
        field: 'Education',
        title: 'Digital Learning Project (DLP)',
        description:
            'Comprehensive program to modernize schools and enhance teacher capabilities through innovative training methodologies, digital literacy programs, and infrastructure development to create 21st-century learning environments.',
        image: '/images/homePage/projectCardImages/dlp.webp',
        link: '/projects/digital-learning-project',
    },
];

export { features, projects };
