import { Server } from '@modelcontextprotocol/sdk/server';
export declare function startMcpServer(): Promise<Server<{
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            };
        };
    };
}, {
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            };
        };
    };
}, {
    [x: string]: unknown;
    _meta?: {
        [x: string]: unknown;
        progressToken?: string | number;
        "io.modelcontextprotocol/related-task"?: {
            taskId: string;
        };
    };
}>>;
