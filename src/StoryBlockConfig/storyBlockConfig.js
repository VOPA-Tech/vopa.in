// src/StoryblokConfig/storyblokConfig.ts
import { storyblokInit, apiPlugin } from '@storyblok/react';

storyblokInit({
    accessToken: process.env.REACT_APP_STORY_BLOCK_ACCESS_TOKEN,
    use: [apiPlugin],
});
