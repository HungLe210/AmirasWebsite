export interface CarouselProps<T> {
	items: T[];
	ItemComponent: React.ComponentType<{ item: T }>;
	shape: 'retangle' | 'circle',
	uniqueID: string
	title?: string,
	subtitle?: string,
	isButton:boolean
}