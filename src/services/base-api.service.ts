export interface Pagination {
	limit: number;
	page?: number;
	total: number;
}

export abstract class ApiCRUD {
	abstract apiName: string;

	// async getOne(id: string, params?: any) {
	// 	const url = APP.BASE_URL + `${this.apiName}/${id}`;
	// 	return await axios.get(url, params);
	// }

	// async getAll(params: any) {
	// 	const url = APP.BASE_URL + `${this.apiName}`;
	// 	return await axios.get(url, params);
	// }

	// async createOne(params: any) {
	// 	const url = APP.BASE_URL + `${this.apiName}/add`;
	// 	return await axios.post(url, params);
	// }

	// async deleteOne(params: any) {
	// 	const url = APP.BASE_URL + `${this.apiName}/delete`;
	// 	return await axios.post(url, params);
	// }

	// async updateOne(params: any) {
	// 	const url = APP.BASE_URL + `${this.apiName}/update`;
	// 	return await axios.post(url, params);
	// }
}
