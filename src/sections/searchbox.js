import React, { useState } from 'react'
import { Textarea, Input } from 'theme-ui'
import Bucket from 'sections/bucketcard';

const App = () => {

const [myOptions, setMyOptions] = useState([])

const getDataFromAPI = () => {
	console.log("Options Fetched from API")

	fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
	return response.json()
	}).then((res) => {
	console.log(res.data)
	for (var i = 0; i < res.data.length; i++) {
		myOptions.push(res.data[i].employee_name)
	}
	setMyOptions(myOptions)
	})
}

return (

	<div >
	<Input
		style={{ width: 815, justifyContent:"center",marginLeft: '22%', marginTop: '200px'  }}
        placeholder="SEARCH  YOUR SHARECASE NOW"
		options={myOptions}
		renderInput={(params) => (
		<Textarea {...params}
			onChange={getDataFromAPI}
			variant="outlined"
			label="Search Box"
		/>
		)}
	/>
    <Bucket/>
	</div>
   
);
}

export default App
