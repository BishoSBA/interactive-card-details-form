const displayName = document.getElementById("display-name");
const displayNumber = document.getElementById("display-number");
const displayMonth = document.getElementById("display-month");
const displayYear = document.getElementById("display-year");
const displayCVC = document.getElementById("display-CVC");

const inputName = document.getElementById("name");
const inputNumber = document.getElementById("card-number");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputCVC = document.getElementById("CVC");

inputName.addEventListener("input", () => {
	const inputValue = inputName.value;
	displayName.innerHTML = inputValue;
});
inputNumber.addEventListener("input", () => {
	inputNumber.value = formatLength(inputNumber.value, 16);
	const inputValue = formatCardNumber(inputNumber.value);
	displayNumber.innerHTML = inputValue;
});
inputMonth.addEventListener("input", () => {
	const inputValue = formatLength(inputMonth.value, 2);
	inputMonth.value = inputValue;
	displayMonth.innerHTML = inputValue;
});
inputYear.addEventListener("input", () => {
	const inputValue = formatLength(inputYear.value, 2);
	inputYear.value = inputValue;
	displayYear.innerHTML = inputValue;
});
inputCVC.addEventListener("input", () => {
	const inputValue = formatLength(inputCVC.value, 3);
	inputCVC.value = inputValue;
	displayCVC.innerHTML = inputValue;
});

const formatCardNumber = (value) => {
	if (value.length > 16) value = value.slice(0, 16);
	const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
	const onlyNumbers = value.replace(/[^\d]/g, "");

	return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
		[$1, $2, $3, $4].filter((group) => !!group).join(" ")
	);
};

const formatLength = (value, length) => {
	if (value.length > length) value = value.slice(0, length);
	return value;
};
