export type Integration = {
    appLogo: string;
    app: string;
    description: string;
};
export type VschoolFeatures = {
    icon: string;
    title: string;
    summary: string;
};

type Availability = {
    available: boolean;
    addon?: boolean;
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
    link: string;
};
