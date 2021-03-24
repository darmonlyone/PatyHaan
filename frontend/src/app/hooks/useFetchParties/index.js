import { useEffect, useState } from "react";

import api from "app/api";

const useFetchParties = (history) => {
	const [parties, setParties] = useState([]);

	useEffect(() => {
		api.party
			.getAll()
			.then((res) => {
				if (res.status === 200) {
					const sortedData = res.data.sort((a, b) => {
						return new Date(b.createAt) - new Date(a.createAt);
					});
					setParties(sortedData);
				}
			})
			.catch((err) => {
				alert(
					`เกิดข้อผิดพลาดในระบบ ${err.response.status}: ${err.response.data.error.message}`
				);
				history.push("./login");
			});
	}, [history]);

	return { parties };
};

export default useFetchParties;
