const listForProspective = async (params, credentials, signal) => {
  try {
    let response = await fetch('/api/questions/for/'+params.prospectiveId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        // 'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch(err){
    console.log(err)
  }
}