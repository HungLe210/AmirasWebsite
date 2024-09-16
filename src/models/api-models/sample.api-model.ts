import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AMSample {
	@Expose()
	name?: string;
}
