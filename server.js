const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()

app.set('port', process.env.PORT || 3000);

app.use(basicAuth({
  challenge: true,
  unauthorizedResponse: () => {
    return "Unauthorized"
  },
  authorizer: (username, password) => {
    const correctUserName = '1234'
    const correctPassword = '1234'
    const userMatch = basicAuth.safeCompare(username, correctUserName)
    const passMatch = basicAuth.safeCompare(password, correctPassword)

    return userMatch & passMatch
  },
}))

app.use(express.static(__dirname + '/public'))
 
app.listen(app.get('port'), () => { console.log('Server listening on port %s', app.get('port'))})
