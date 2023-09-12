const listForProspective = async (params, signal) => {
  try {
    console.log('params', params)
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

const create = async (params, question) => {
  try {
    let response = await fetch('/api/questions/for/' + params.prospectiveId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  listForProspective,
  create
}