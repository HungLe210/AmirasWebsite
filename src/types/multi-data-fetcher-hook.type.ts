// import { Any } from './common.type';

// export type MultiDataFetcherHookParams<Filters = Any> = {
// 	/** Initial filters value */
// 	initFilters?: Filters;
// 	/** Initial page to load data */
// 	initPage?: number;
// 	/** Enable or disable fetching data base page & filters changes automatically
// 	 *    - If it is enabled, the data will be fetched automatically
// 	 *    - If it is disabled, outside need to call fetchData() function to fetch data
// 	 */
// 	autoFetching?: boolean;
// };

// export type MultiDataFetcherHookFields<Data = Any, Filters = Any> = {
// 	loading: boolean;
// 	data: {
// 		page: number;
// 		totalPage: number;
// 		totalItem: number;
// 		items: Data[];
// 	};
// 	filters: Filters;

// 	changeFilters: (changes: Partial<Filters>) => void;
// 	goToPage: (page: number) => void;
// 	fetchData: () => void;
// };
