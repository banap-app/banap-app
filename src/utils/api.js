export async function customFetch(url, method = 'GET', data = null) {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(`http://localhost:3000${url}`, requestOptions)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
