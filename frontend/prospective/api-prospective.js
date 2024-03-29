const list = async (signal) => {
  try {
    let response = await fetch('/api/prospectives/', {
      method: 'GET',
      signal: signal,
    })

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

const read = async (params, signal) => {
  try {
    let response = await fetch('/api/prospectives/' + params.prospectiveId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const create = async (params, prospective) => {
  try {
    let response = await fetch('/api/prospectives/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prospective)
    })
      return response.json()
  } catch(err) { 
    console.log(err)
  }
}

const update = async (params, credentials, prospective) => {
  try {
    let response = await fetch('/api/prospectives/' + params.prospectiveId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(prospective)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const publishedList = async (signal, credentials) => {
  try {
    let response = await fetch('/api/prospectives/published/', {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
    })

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export { list, read, create, update, publishedList }