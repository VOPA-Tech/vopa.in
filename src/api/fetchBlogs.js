export const fetchBlogs = async () => {
    const token = process.env.REACT_APP_STORY_BLOCK_ACCESS_TOKEN; // replace with env var in production
    const version = 'published'; // or 'draft'
    const starts_with = 'blog_post'; // your folder slug

    const res = await fetch(
        `https://api.storyblok.com/v2/cdn/stories?starts_with=${starts_with}&version=${version}&token=${token}`
    );

    const json = await res.json();

    return json.stories || [];
};
