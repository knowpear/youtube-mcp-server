import { TranscriptParams, SearchTranscriptParams } from '../types.js';
/**
 * Service for interacting with YouTube video transcripts
 */
export declare class TranscriptService {
    private initialized;
    constructor();
    private initialize;
    /**
     * Get the transcript of a YouTube video
     */
    getTranscript({ videoId, language }: TranscriptParams): Promise<any>;
    /**
     * Search within a transcript
     */
    searchTranscript({ videoId, query, language }: SearchTranscriptParams): Promise<any>;
    /**
     * Get transcript with timestamps
     */
    getTimestampedTranscript({ videoId, language }: TranscriptParams): Promise<any>;
}
