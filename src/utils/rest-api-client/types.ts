// import { Any } from '@types';
// import { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

// export type RestApiClientResponse<DATA> = {
// 	success: boolean;
// 	data?: DATA | null;
// 	metadata?: {
// 		statusCode?: number;
// 		errorData?: Any;
// 		errorMessage?: string;
// 	};
// };

// export type RestApiClientOptsCustom = {
// 	logging?: boolean;
// };

// export type RestApiClientOpts = RestApiClientOptsCustom &
// 	Pick<CreateAxiosDefaults, 'baseURL' | 'headers' | 'timeout' | 'proxy'>;

// export type RestApiClientDataTransformers = {
// 	preRequest: ((data: Any) => Promise<Any>)[];
// 	postRequest: ((data: Any) => Promise<Any>)[];
// };

// export type RestApiClientRequestOpts = {
// 	requestOpts?: Pick<AxiosRequestConfig, 'headers'>;
// 	dataTransformers?: RestApiClientDataTransformers;
// };
