const listForUser = async (params, credentials, signal) => {
  try {

    let response = await fetch('/api/submissions/for/' + params.userId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      signal: signal,
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  listForUser
}
