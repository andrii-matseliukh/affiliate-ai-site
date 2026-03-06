// src/lib/scraped-data.ts

// TypeScript types for scraped data

export interface ScrapedData {
    id: string;
    title: string;
    content: string;
    sourceUrl: string;
    scrapedAt: Date;
}

// Utility functions for handling scraped data

/**
 * Function to format scraped data for storage.
 * @param data - The scraped data to format.
 * @returns Formatted data.
 */
export function formatScrapedData(data: ScrapedData): string {
    return JSON.stringify(data);
}

/**
 * Function to validate scraped data.
 * @param data - The data to validate.
 * @returns Boolean indicating validity.
 */
export function validateScrapedData(data: ScrapedData): boolean {
    return !!data.title && !!data.content && !!data.sourceUrl;
}