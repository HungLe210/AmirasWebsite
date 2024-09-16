import { ClassConstructor } from 'class-transformer';
import { DataTransformer } from './data-transformer.util';
import { Any } from '@types';

export const createDataTransformFn =
	<M>(model: ClassConstructor<M>) =>
	async (data: Any) => {
		const dataTransformer = new DataTransformer(model);
		return dataTransformer.transform(data);
	};
