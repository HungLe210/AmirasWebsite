import { Any } from '@types';
import { ClassConstructor, plainToInstance } from 'class-transformer';

export class DataTransformer<D> {
	constructor(private readonly definition: ClassConstructor<D>) {
		//
	}

	transform(data: Any): D | D[] {
		return plainToInstance(this.definition, data);
	}
}

export class DefaultDataTransformer {
	transform(data: Any): Any {
		return data;
	}
}
