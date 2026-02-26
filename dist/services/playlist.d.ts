import { PlaylistParams, PlaylistItemsParams, SearchParams } from '../types.js';
/**
 * Service for interacting with YouTube playlists
 */
export declare class PlaylistService {
    private youtube;
    private initialized;
    constructor();
    /**
     * Initialize the YouTube client only when needed
     */
    private initialize;
    /**
     * Get information about a YouTube playlist
     */
    getPlaylist({ playlistId }: PlaylistParams): Promise<any>;
    /**
     * Get videos in a YouTube playlist
     */
    getPlaylistItems({ playlistId, maxResults }: PlaylistItemsParams): Promise<any[]>;
    /**
     * Search for playlists on YouTube
     */
    searchPlaylists({ query, maxResults }: SearchParams): Promise<any[]>;
}
