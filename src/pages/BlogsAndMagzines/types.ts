export type Post = {
    link: string;
    tag: { variant: string; value: string };
    title: string;
    docUrl: string;
    description?: string;
    postedBy?: {
        avatar: string;
        name: string;
    };
    postedOn?: {
        date: string;
        time: string;
    };
    overlay?: string;
    groupAvatars?: string[];
};

export type oldPost = {
    image: string;
    slug: string;
    tag: { variant: string; value: string };
    title: string;
    description?: string;
    postedBy: {
        avatar: string;
        name: string;
    };
    postedOn?: {
        date: string;
        time: string;
    };
    overlay?: string;
    groupAvatars?: string[];
};
