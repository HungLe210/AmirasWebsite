import { RestApiClientDataTransformers, RestApiClientOpts } from '@utils';

export type BaseApiCallerOpts = {
	restApiClientOpts: RestApiClientOpts;
};

export type BaseApiCallerEndpointDef = {
	endpoint: string;
	dataTransformers: RestApiClientDataTransformers;
};
