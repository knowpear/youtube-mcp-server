import { ChannelParams, ChannelVideosParams } from '../types.js';
/**
 * Service for interacting with YouTube channels
 */
export declare class ChannelService {
    private youtube;
    private initialized;
    constructor();
    /**
     * Initialize the YouTube client only when needed
     */
    private initialize;
    /**
     * Get channel details
     */
    getChannel({ channelId }: ChannelParams): Promise<any>;
    /**
     * Get channel playlists
     */
    getPlaylists({ channelId, maxResults }: ChannelVideosParams): Promise<any[]>;
    /**
     * Get channel videos
     */
    listVideos({ channelId, maxResults }: ChannelVideosParams): Promise<any[]>;
    /**
     * Get channel statistics
     */
    getStatistics({ channelId }: ChannelParams): Promise<any>;
}
