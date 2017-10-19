const apiKey = '675c9da61e17cc50';
const apiAddress = 'http://api.wunderground.com/api/';

function handleFetchError(error) {
  console.log(error);
}

function GetLocalisationAddress() {
  return `${apiAddress}${apiKey}/geolookup/q/autoip.json`;
}

function GetForecastAddress(location) {
  return `${apiAddress}${apiKey}/forecast/q/${location.state}/${location.city}.json`;
}

export function GetLocationASync() {
  let myRequest = new Request(GetLocalisationAddress(), {
    method: 'GET'
  });

  return fetch(myRequest).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  }).then((data) => {
    return data.location;
  }).catch((error) => {
    return handleFetchError(error)
  })
}

export function GetForecastASync(location) {
  let myRequest = new Request(GetForecastAddress(location), {
    method: 'GET'
  });

  return fetch(myRequest).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  }).then((data) => {
    return data.forecast.simpleforecast.forecastday;
  }).catch((error) => {
    return handleFetchError(error)
  })
}

