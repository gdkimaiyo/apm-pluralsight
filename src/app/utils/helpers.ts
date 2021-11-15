import * as countryCurrency from 'iso-country-currency';

export const getCurrency = (data: any) => {
    const currency = countryCurrency.getAllInfoByISO(data);
    return currency;
}

export const formatCurrency = (amount: number, currency: any) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    return formatter.format(amount);
}
