const axios = {
	get: jest.fn(() => Promise.resolve({ data: {} })),
	post: jest.fn(() => Promise.resolve({ data: {} })),
	put: jest.fn(() => Promise.resolve({ data: {} })),
	delete: jest.fn(() => Promise.resolve({ data: {} })),
	create: () => axios,
	defaults: {
		adapter: {},
	},
};

export default axios;
