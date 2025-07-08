// src/StoryblokConfig/storyblokConfig.ts
import { storyblokInit, apiPlugin } from '@storyblok/react';

storyblokInit({
    accessToken: 'kCKFLVcCUY4HXnQ2HIDkZAtt', // Replace with your token from Storyblok
    use: [apiPlugin],
});
