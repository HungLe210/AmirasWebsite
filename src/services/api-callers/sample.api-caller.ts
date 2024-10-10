// import { VMSample } from '@models/view-models';
// import { baseApiCaller } from './base.api-caller';
// import { baseApiCallerOpts } from './types';
// import { createDataTransformFn } from '@utils';
// import { AMSample } from '@models/api-models';

// export class SampleApiCaller extends baseApiCaller {
// 	constructor(opts: baseApiCallerOpts) {
// 		super(opts);
// 	}

// 	protected _initEndpointDefs(): void {
// 		this._endpointDefs['SAMPLE'] = {
// 			endpoint: '/sample',
// 			dataTransformers: {
// 				preRequest: [createDataTransformFn(AMSample)],
// 				postRequest: [createDataTransformFn(VMSample)],
// 			},
// 		};
// 	}

// 	async getSample() {
// 		return this._restApiClient.get<VMSample>(
// 			this._buildEndpoint(this._endpointDefs['SAMPLE'].endpoint, {}),
// 			{
// 				dataTransformers: this._endpointDefs['SAMPLE'].dataTransformers,
// 			},
// 		);
// 	}
// }
