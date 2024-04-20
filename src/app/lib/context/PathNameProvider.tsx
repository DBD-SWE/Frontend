'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export const PathnameContext = createContext<string>('');

export const PathnameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const pathName = usePathname().split('/').pop() || 'default';
    return (
        <PathnameContext.Provider value={pathName}>
            {children}
        </PathnameContext.Provider>
    );
};

export const usePathnameValue = () => useContext(PathnameContext);
