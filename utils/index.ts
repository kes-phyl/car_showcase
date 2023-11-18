// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e596bb2d29mshc795c3acdab7badp137319jsnee4a4a9a2763',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//fetchcars function is an example of utility functions
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e596bb2d29mshc795c3acdab7badp137319jsnee4a4a9a2763',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});
    const result = await response.json()
    return result;

}


