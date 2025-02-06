/** @format */

import { useEffect } from "react";

const useKeyPressDown = (targetKey, callback) => {
	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key.toLowerCase() === targetKey.toLowerCase()) {
				callback();
			}
		};
		// Add event listener for keys
		document.addEventListener("keydown", handleKeyPress);


    //CleanUp
		return () => document.removeEventListener("keydown", handleKeyPress);
	}, [targetKey, callback]);
};

export default useKeyPressDown;
