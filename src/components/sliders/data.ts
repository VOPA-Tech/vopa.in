// types
import { Slide, Slide1 } from './types';

// images
import Avatar1 from '../../assets/images/avatars/img-8.jpg';
import Avatar2 from '../../assets/images/avatars/img-5.jpg';
import Amazon from '../../assets/images/brands/amazon.svg';
import Google from '../../assets/images/brands/google.svg';

import saas1 from '../../assets/images/hero/saas1.jpg';
import saas2 from '../../assets/images/hero/saas2.jpg';
import saas3 from '../../assets/images/hero/saas3.jpg';

const slides: Slide[] = [
    {
        statement:
            'I used to struggle with English and math, but the V-School app made it easier. Now, I’m excited to learn every day, and I even topped my class.',
        customer: {
            avatar: Avatar1,
            name: 'Student, Pune',
            designation: 'v-School User',
        },
        logo: Amazon,
    },
    {
        statement:
            'The V-School app has everything in Marathi, which helps our students understand better. It’s made learning fun and accessible, even for kids who don’t have much support at home.',
        customer: {
            avatar: Avatar2,
            name: 'Teacher',
            designation: 'v-School User',
        },
        logo: Google,
    },
    {
        statement: 'I will donate some amount from my salary to V-School in the future!',
        customer: {
            avatar: Avatar2,
            name: 'Prathamesh Patil',
            designation: 'V-School user and scholarship winner',
        },
        logo: Google,
    },
    {
        statement:
            'Raste ki Pathshala has transformed how we teach road safety. Our students are more aware and responsible on the roads',
        customer: {
            avatar: Avatar2,
            name: 'Teacher, Nanded District',
            designation: 'Road Safety Project User',
        },
        logo: Google,
    },
    {
        statement:
            'The School Transformation Project has revolutionized our teaching methods. Our students are more engaged and perform better than ever.',
        customer: {
            avatar: Avatar2,
            name: 'Principal, XYZ School',
            designation: 'STP beneficiary',
        },
        logo: Google,
    },
    {
        statement: 'MYCA brings mental health into everyday conversations — in the language people speak and trust.',
        customer: {
            avatar: Avatar2,
            name: ' Prafulla, ',
            designation: 'Co-creator of MYCA',
        },
        logo: Google,
    },
];

const slides1: Slide1[] = [
    {
        image: saas1,
        slideTitle: 'Manage your saas business with ease',
        description:
            'Make your saas application stand out with high-quality landing page designed and developed by professional.',
    },
    {
        image: saas2,
        slideTitle: 'The best way to showcase your mobile app',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
    {
        image: saas3,
        slideTitle: 'Smart Solution that convert Lead to Customer',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
];

export { slides, slides1 };
