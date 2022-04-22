import axios from 'axios';

const fetchCustomers = async () => {
	return await axios.get('https://intense-tor-76305.herokuapp.com/merchants')
		.then(response => response.data)
		.catch(error => console.log('error', error));
};

export default fetchCustomers;