import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SolutionCard {
    @Expose()
    id?: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
}

