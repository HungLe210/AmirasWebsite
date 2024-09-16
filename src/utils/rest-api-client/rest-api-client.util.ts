// import { Any } from '@types';
// import axios, {
// 	AxiosError,
// 	AxiosInstance,
// 	AxiosResponse,
// 	Method,
// 	RawAxiosRequestHeaders,
// } from 'axios';
// import { RestApiClientOpts, RestApiClientRequestOpts, RestApiClientResponse } from './types';

// export class RestApiClient {
// 	private _axiosInstance: AxiosInstance;
// 	private _opts: RestApiClientOpts;

// 	/**
// 	 *
// 	 * @param axiosDefaultConfig when declared must declare baseUrl
// 	 */
// 	constructor(opts?: RestApiClientOpts) {
// 		this._opts = opts || this._defaultOpts;
// 		this._axiosInstance = axios.create(this._opts);
// 	}

// 	private get _defaultOpts(): RestApiClientOpts {
// 		return {
// 			timeout: 60000,
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		};
// 	}

// 	private _handleError<DATA>(error: AxiosError): RestApiClientResponse<DATA> {
// 		return {
// 			success: false,
// 			data: null,
// 			metadata: {
// 				statusCode: error.response?.status,
// 				errorData: error.response?.data,
// 				errorMessage: error.message,
// 			},
// 		};
// 	}

// 	private async _handleResponse<DATA>(
// 		response: AxiosResponse,
// 		requestOpts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		let data = response.data;

// 		if (data && requestOpts?.dataTransformers?.postRequest?.length) {
// 			data = await this._executeRequestDataTransforms(
// 				data,
// 				requestOpts.dataTransformers.postRequest,
// 			);
// 		}

// 		return {
// 			success: true,
// 			data,
// 			metadata: {
// 				statusCode: response.status,
// 			},
// 		};
// 	}

// 	private async _executeRequestDataTransforms(
// 		data: Any,
// 		transformFns: ((data: Any) => Promise<Any>)[],
// 	): Promise<Any> {
// 		let transformedData = data;

// 		for (const transformFn of transformFns) {
// 			transformedData = await transformFn(transformedData);
// 		}

// 		return transformedData;
// 	}

// 	private async _sendRequest<DATA = Any>(cfgs: {
// 		method: Method;
// 		endpoint: string;
// 		data?: Any;
// 		opts?: RestApiClientRequestOpts;
// 	}): Promise<RestApiClientResponse<DATA>> {
// 		let data = cfgs?.data;

// 		if (data && cfgs?.opts?.dataTransformers?.preRequest?.length) {
// 			data = await this._executeRequestDataTransforms(data, cfgs.opts.dataTransformers.preRequest);
// 		}

// 		return this._axiosInstance
// 			.request({
// 				method: cfgs.method,
// 				url: cfgs.endpoint,
// 				data,
// 				...(cfgs?.opts?.requestOpts || {}),
// 			})
// 			.then((res) => this._handleResponse<DATA>(res, cfgs?.opts))
// 			.catch((err) => this._handleError(err));
// 	}

// 	setBaseURL(baseURL: string) {
// 		this._axiosInstance.defaults.baseURL = baseURL;
// 	}

// 	setHeaders(headers: RawAxiosRequestHeaders & { [key: string]: string | number }) {
// 		this._axiosInstance.defaults.headers = {
// 			...this._axiosInstance.defaults.headers,
// 			...headers,
// 		};
// 	}

// 	async get<DATA = Any>(
// 		endpoint: string,
// 		opts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		return this._sendRequest<DATA>({
// 			method: 'GET',
// 			endpoint,
// 			opts,
// 		});
// 	}

// 	async post<DATA = Any>(
// 		endpoint: string,
// 		data: Any,
// 		opts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		return this._sendRequest<DATA>({
// 			method: 'POST',
// 			endpoint,
// 			data,
// 			opts,
// 		});
// 	}

// 	async put<DATA = Any>(
// 		endpoint: string,
// 		data: Any,
// 		opts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		return this._sendRequest<DATA>({
// 			method: 'PUT',
// 			endpoint,
// 			data,
// 			opts,
// 		});
// 	}

// 	async delete<DATA = Any>(
// 		endpoint: string,
// 		opts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		return this._sendRequest<DATA>({
// 			method: 'DELETE',
// 			endpoint,
// 			opts,
// 		});
// 	}

// 	async patch<DATA = Any>(
// 		endpoint: string,
// 		data: Any,
// 		opts?: RestApiClientRequestOpts,
// 	): Promise<RestApiClientResponse<DATA>> {
// 		return this._sendRequest<DATA>({
// 			method: 'PATCH',
// 			endpoint,
// 			data,
// 			opts,
// 		});
// 	}
// }
