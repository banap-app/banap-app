export async function customFetch(
  url,
  method = 'GET',
  needToken = true,
  data = null
) {
  let requestOptions = {}

  if (needToken) {
    requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    }
  } else {
    requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  if (data) {
    requestOptions.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(
      `${process.env.APP_API_URL}${url}`,
      requestOptions
    )
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
