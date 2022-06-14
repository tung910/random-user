import React, { memo } from "react";

function UserList({ data }) {
	return (
		data.results.length > 0 &&
		data.results.map((item, index) => (
			<tr key={index}>
				<td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
					<img
						src={item.picture?.large}
						className='rounded-full'
						alt='Avatar'
					/>
				</td>
				<td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
					{`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}
				</td>
				<td className='p-4 text-gray-700 whitespace-nowrap'>{item.email}</td>
				<td className='p-4 text-gray-700 whitespace-nowrap'>
					<strong className='bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium'>
						{item.gender}
					</strong>
				</td>
				<td className='p-4 text-gray-700 whitespace-nowrap'>{item.phone}</td>
			</tr>
		))
	);
}

export default memo(UserList);
