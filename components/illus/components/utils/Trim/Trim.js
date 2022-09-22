export const Trim = (str, charsToTrim = [/" "/]) => {
	for (let i = 0; i < charsToTrim.length; i++) {
		str.replace(charsToTrim[i], "");
	}
	return str;
};
