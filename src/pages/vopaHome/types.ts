export type TeamMember = {
    avatar: string;
    name: string;
    designation: string;
};
export type Feature = {
    icon: string;
    variant: string;
    title: string;
    description: string;
};
export type Project = {
    field: string;
    title: string;
    description: string;
    image: string;
    link: string;
};

export type BlogPost = {
    heading: string;
    img: string;
    time: string;
    title: string;
    description: string;
};

export type Slide = {
    statement: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo?: string;
};
