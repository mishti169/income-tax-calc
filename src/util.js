const ONE_LAKH = 100000;

export const getOldCalTax = (income = 0) => {
	if (income < ONE_LAKH * 2.5) {
		return 0;
	} else if (income > ONE_LAKH * 2.5 && income <= ONE_LAKH * 5) {
		return (income - 250000) * 0.05;
	} else if (income > 500000 && income <= 1000000) {
		return (income - 500000) * 0.2 + 12500;
	} else if (income > 1000000) {
		return (income - 1000000) * 0.3 + 112500;
	}
};

export const getNewCalTax = (income = 0) => {
	if (income > 250000 && income <= 500000) {
		return (income - 250000) * 0.05;
	} else if (income > 500000 && income <= 750000) {
		return (income - 500000) * 0.1 + 12500;
	} else if (income > 750000 && income <= 1000000) {
		return (income - 750000) * 0.15 + 37500;
	} else if (income > 1000000 && income <= 1250000) {
		return (income - 1000000) * 0.2 + 75000;
	} else if (income > 1250000 && income <= 1500000) {
		return (income - 1250000) * 0.25 + 125000;
	} else if (income > 1500000) {
		return (income - 1500000) * 0.3 + 187500;
	}
};
