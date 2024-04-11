const fragmentStr = window.location.search

console.log(fragmentStr)

const urlParams = new URLSearchParams(fragmentStr)

console.log(urlParams)

const userToken = urlParams.get('access_token')

console.log(userToken)

/*function revokeAccess(accessToken) {
    // Google's OAuth 2.0 endpoint for revoking access tokens.
    let revokeTokenEndpoint = 'https://oauth2.googleapis.com/revoke';
  
    // Create <form> element to use to POST data to the OAuth 2.0 endpoint.
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', revokeTokenEndpoint);
  
    // Add access token to the form so it is set as value of 'token' parameter.
    // This corresponds to the sample curl request, where the URL is:
    //      https://oauth2.googleapis.com/revoke?token={token}
    let tokenField = document.createElement('input');
    tokenField.setAttribute('type', 'hidden');
    tokenField.setAttribute('name', 'token');
    tokenField.setAttribute('value', accessToken);
    form.appendChild(tokenField);
  
    // Add form to page and submit it to actually revoke the token.
    document.body.appendChild(form);
    form.submit();
  }*/