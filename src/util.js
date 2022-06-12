export const getOldCalTax = (income = 0) => {
	let calculatedTax = 0;

	if (income > 250000 && income <= 500000) {
		calculatedTax += (income - 250000) * 0.05;
		return calculatedTax;
	} else if (income > 500000 && income <= 1000000) {
		calculatedTax = 12500;
		return (calculatedTax += (income - 500000) * 0.2);
	} else if (income > 1000000) {
		calculatedTax = 112500;
		return (calculatedTax += (income - 1000000) * 0.3);
	}
	return calculatedTax;
};

export const getNewCalTax = () => {
	console.log('hi');
};
