export interface CarouselProps<T> {
	items: T[];
	ItemComponent: React.ComponentType<{ item: T }>;
	shape: string,
	uniqueID: string;
}