export type Post = {
    link: string;
    tag: { variant: string; value: string };
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
