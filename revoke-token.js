const fragmentStr = window.location.hash
const urlParams = new URLSearchParams(fragmentStr)
const userToken = urlParams.get('access_token')


async function getUserData(accessToken) {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    const data = await response.json()
    return data
  }

  console.log(getUserData(userToken))

