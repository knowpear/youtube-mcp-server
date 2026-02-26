import { VideoParams, SearchParams, TrendingParams, RelatedVideosParams } from '../types.js';
/**
 * Service for interacting with YouTube videos
 */
export declare class VideoService {
    private youtube;
    private initialized;
    constructor();
    /**
     * Initialize the YouTube client only when needed
     */
    private initialize;
    /**
     * Get detailed information about a YouTube video
     */
    getVideo({ videoId, parts }: VideoParams): Promise<any>;
    /**
     * Search for videos on YouTube
     */
    searchVideos({ query, maxResults }: SearchParams): Promise<any[]>;
    /**
     * Get video statistics like views, likes, and comments
     */
    getVideoStats({ videoId }: {
        videoId: string;
    }): Promise<any>;
    /**
     * Get trending videos
     */
    getTrendingVideos({ regionCode, maxResults, videoCategoryId }: TrendingParams): Promise<any[]>;
    /**
     * Get related videos for a specific video
     */
    getRelatedVideos({ videoId, maxResults }: RelatedVideosParams): Promise<any[]>;
}
