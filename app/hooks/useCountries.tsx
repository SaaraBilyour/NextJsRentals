import countries from "../../node_modules/world-countries/countries.json" // npm install world-countries

const formattedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
}))
console.log(countries)
const useCountries = () => {
    const getAll = () => formattedCountries; 

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value); 
}

return {
    getAll,
    getByValue,
}
}

export default useCountries;