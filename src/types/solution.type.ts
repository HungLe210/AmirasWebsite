export interface SolutionCard {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export interface SolutionData {
    heading: string;
    subheading: string;
    cards: SolutionCard[];
}