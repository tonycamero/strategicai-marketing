import React from 'react';

interface TrustAgentShellProps {
    enabled?: boolean;
    mode?: string;
}

export function TrustAgentShell({ enabled, mode }: TrustAgentShellProps) {
    if (!enabled) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-medium">TrustConsole Active</span>
            </div>
        </div>
    );
}
