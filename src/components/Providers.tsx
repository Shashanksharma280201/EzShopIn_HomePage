"use client";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
    return (
        <ClerkProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ClerkProvider>
    );
};

export default Providers;
