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
        // 'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export { list, read }