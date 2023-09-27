const predictionsForProspective = async (params, signal) => {
  try {
    let response = await fetch('/api/predictions/for/' + params.prospectiveId + '/by/' + params.userId, {
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

const createPredictions = async (params, credentials, predictions) => {
  // console.log('predictions', predictions)
  try {
    let response = await fetch('/api/predictions/for/' + params.prospectiveId + '/by/' + params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify(predictions)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const predictionsForAllUsers = async (params, signal) => {
  console.log('params', params);
  try {
    let response = await fetch('/api/predictions/for/' + params.prospectiveId, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
      }
    });
    return response.json();
  } catch(err) {
    console.log(err);
  }
}

const update = async (params, credentials, predictions) => {
  console.log('params', params);
  try {
    let response = await fetch('/api/predictions/for/' + params.prospectiveId + '/by/' + params.userId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + credentials.t,
      },
      body: JSON.stringify(predictions)
    });

    console.log('response', response);
    return response.json();
  } catch(err) {
    console.log(err);
  }
}

export {
  predictionsForProspective,
  createPredictions,
  predictionsForAllUsers,
  update
}