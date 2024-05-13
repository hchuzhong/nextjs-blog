"use client";

import Link from '@/components/link/link';
import { usePathname, useSearchParams } from 'next/navigation';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
}
export default function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number | string) => {
        if (typeof pageNumber === 'string') {
            pageNumber = parseInt(pageNumber);
        }
        if (pageNumber <= 1) pageNumber = 1;
        if (pageNumber >= totalPages) pageNumber = totalPages;
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link
                        href={createPageURL(currentPage - 1 )}
                        rel="prev"
                    >
                        Previous
                    </Link>
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link href={createPageURL(currentPage + 1)} rel="next">
                        Next
                    </Link>
                )}
            </nav>
        </div>
    )
}