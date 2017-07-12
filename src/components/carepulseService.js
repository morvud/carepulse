const baseUrl = 'https://www.carepulse.co.uk/api/nursing_homes/'

// Load data from the API
export const loadData = () => {
  return fetch(baseUrl)
   .then(response => response.json())
}

// Update data through the API
export const updateData = (data) => {
  fetch('https://www.carepulse.co.uk/api/nursing_homes/' + data.id , {
    method: 'put',
    body: JSON.stringify({"no_occupied_beds": data.no_occupied_beds}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}