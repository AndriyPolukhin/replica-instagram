import { useState, useEffect } from 'react';

import { getUserByUserId } from '../services/firebase';

const useUser = (userId) => {
	const [activeUser, setActiveUser] = useState({});

	useEffect(() => {
		const getUserFromFirestore = async (userId) => {
			const [user] = await getUserByUserId(userId);
			setActiveUser(user);
		};
		if (userId) {
			getUserFromFirestore(userId);
		}
	}, [userId]);

	return { user: activeUser, setActiveUser };
};

export default useUser;
