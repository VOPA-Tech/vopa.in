// types
import { TeamMember, Feature, Project, BlogPost } from './types';

// images
import img1 from 'assets/images/avatars/img-1.jpg';
import img2 from 'assets/images/avatars/img-2.jpg';
import img3 from 'assets/images/avatars/img-3.jpg';
import img4 from 'assets/images/avatars/img-4.jpg';
import img5 from 'assets/images/avatars/img-5.jpg';
import img6 from 'assets/images/avatars/img-6.jpg';
import img7 from 'assets/images/avatars/img-7.jpg';
import img8 from 'assets/images/avatars/img-8.jpg';
import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';

const teamMembers: TeamMember[] = [
    {
        avatar: img1,
        name: 'Ana Russo',
        designation: 'CEO',
    },
    {
        avatar: img2,
        name: 'Danette Payne',
        designation: 'CTO',
    },
    {
        avatar: img3,
        name: 'Tammy Ward',
        designation: 'VP, Product Development',
    },
    {
        avatar: img4,
        name: 'Paul Moore',
        designation: 'Back-End Developer',
    },
    {
        avatar: img5,
        name: 'Harry Burris',
        designation: 'PHP Developer',
    },
    {
        avatar: img6,
        name: 'Patricia Ferraro',
        designation: 'Web Designer',
    },
    {
        avatar: img7,
        name: 'Robert Smith',
        designation: 'Graphic Designer',
    },
    {
        avatar: img8,
        name: 'Lindsay Clark',
        designation: 'Web Designer',
    },
    {
        avatar: img2,
        name: 'Lindsay Clark',
        designation: 'Front-End Developer',
    },
    {
        avatar: img4,
        name: 'Ernest Griffith',
        designation: 'PHP Developer',
    },
    {
        avatar: img6,
        name: 'Cecelia Poole',
        designation: 'Back-End Developer',
    },
    {
        avatar: img3,
        name: 'Morris Hall',
        designation: 'Graphic Designer',
    },
];
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
        image: '/images/homePage/projectCardImages/vschool.png',
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
        image: '/images/homePage/projectCardImages/dlp.png',
        link: '/projects/digital-learning-project',
    },
];
const blogPosts: BlogPost[] = [
    {
        heading: 'Design',
        img: ProjectImg2,
        time: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
    },
    {
        heading: 'Development',
        img: ProjectImg2,
        time: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
    },
    {
        heading: 'Design',
        img: ProjectImg2,
        time: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
    },
];

export { teamMembers, features, projects, blogPosts };
