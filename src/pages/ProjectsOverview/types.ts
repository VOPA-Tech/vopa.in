export type Integration = {
    appLogo: string;
    app: string;
    description: string;
};

type Availability = {
    available: boolean;
    addon?: boolean;
};
export type BlogPost = {
    heading: string;
    img: string;
    time: string;
    title: string;
    description: string;
};
export type PlanFeature = {
    name: string;
    starter: Availability;
    professional: Availability;
    enterprise: Availability;
};
export type Project = {
    field: string;
    title: string;
    description: string;
    image: string;
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
