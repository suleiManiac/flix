export interface IMovie {
    id: number;
    title: string;
    cast: string[];
    date: string;
    rating: number;
    imageUrl: string;
    synopsis?: string;
}
