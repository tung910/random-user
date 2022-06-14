import React, { useState } from "react";
import Loading from "../../Components/Loading";
import { useGetUsersQuery } from "../../services/userAPI";
import UserList from "./UserList";
const DATA = [10, 15, 20];

function UserPage() {
	const [page, setPage] = useState(() => {
		const param = new URLSearchParams(window.location.search);
		return +param.get("page") === 0 ? 1 : 1;
	});
	const [result, setResult] = useState(10);
	const { data, isLoading, isError } = useGetUsersQuery({
		page,
		results: result,
	});

	const handlerChange = (e) => {
		setResult(e.target.value);
	};
	if (isError) {
		return <h1>Error</h1>;
	}

	return (
		<div className='max-w-6xl mx-auto my-4'>
			<h2 className='text-center mx-2 text-lg font-medium'>Random User</h2>

			<div className='overflow-x-auto mt-9'>
				<select onChange={(e) => handlerChange(e)}>
					{DATA.map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
				<table className='min-w-full text-sm divide-y divide-gray-200'>
					<thead>
						<tr>
							<th className='p-4 font-medium text-left text-gray-900 whitespace-nowrap'>
								<div className='flex items-center'>Avatar</div>
							</th>
							<th className='p-4 font-medium text-left text-gray-900 whitespace-nowrap'>
								<div className='flex items-center'>Full Name</div>
							</th>
							<th className='p-4 font-medium text-left text-gray-900 whitespace-nowrap'>
								<div className='flex items-center'>Email Address</div>
							</th>
							<th className='p-4 font-medium text-left text-gray-900 whitespace-nowrap'>
								<div className='flex items-center'>gender</div>
							</th>
							<th className='p-4 font-medium text-left text-gray-900 whitespace-nowrap'>
								<div className='flex items-center'>Phone Number</div>
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100'>
						{isLoading ? <Loading /> : data && <UserList data={data} />}
					</tbody>
				</table>
				<div className='flex justify-between items-center'>
					{!isLoading && data.info && (
						<>
							{" "}
							<button
								disabled={+page === 0}
								className={`px-2 py-3 bg-blue-400 rounded-md text-white justify-self-start ${
									+page === 0 && " cursor-not-allowed"
								}`}
								onClick={() => {
									if (+page === 1) return setPage(1);
									setPage(+page - 1);
								}}
							>
								Previous page
							</button>
							<div>
								Page: {data?.info?.page} results: {data.info.results}
							</div>
							<button
								className='px-2 py-3 bg-pink-300 rounded-md text-white justify-self-end'
								onClick={() => setPage(+page + 1)}
							>
								Next page
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default UserPage;
