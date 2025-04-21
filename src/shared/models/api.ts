export interface IPaged<T>{
    skip: number;
    take: number;
    data: T;
} 