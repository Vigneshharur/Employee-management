import React from 'react';
declare type PaginationProps = {
    activePageNumber: number;
    totalPages: number;
    updateActivePageNumber: (pageNumber: number) => void;
    inFlight?: boolean;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map