export const validateEmail = (email) => {
	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
    const regex = /(?=.{6,})/
    return regex.test(String(password).toLowerCase())
}

export const validateNumber = (number) => {
    const regex = /^\d*$/
    return regex.test(String(number))
}