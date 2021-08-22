export interface Link {
    previous?: any;
    current: string;
    next: string;
}

export interface Pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: Link;
}

export interface Meta {
    pagination: Pagination;
}

export interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export interface UserResponse {
    meta: Meta;
    data: User[];
}