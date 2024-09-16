import { RestApiClient } from '@utils';
import { BaseApiCallerEndpointDef, BaseApiCallerOpts } from './types';

export abstract class BaseApiCaller {
	protected _restApiClient: RestApiClient;
	protected _endpointDefs: {
		[name: string]: BaseApiCallerEndpointDef;
	};

	constructor(opts: BaseApiCallerOpts) {
		this._restApiClient = new RestApiClient(opts.restApiClientOpts);
		this._endpointDefs = {};
	}

	protected _buildEndpoint(
		endpoint: string,
		params?: { [field: string]: string | number },
	): string {
		let finalEndpoint = endpoint;

		if (params) {
			for (const paramName in params) {
				finalEndpoint = finalEndpoint.replaceAll(`:${paramName}`, params[paramName]?.toString());
			}
		}

		return finalEndpoint;
	}

	protected abstract _initEndpointDefs(): void;
}
