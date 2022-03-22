export const environment = {
  production: true,
  qa: false,
  dev: false,
  stag: false,
  oktaconfig: { 
      CLIENT_ID: '0oaeo7elx1zYl1upH357', 
      ISSUER: "https://aristocrat.okta.com", 
      LOGIN_REDIRECT_URI: "https://syde-webtst-01:9090/home/explorer/search", 
      LOGOUT_REDIRECT_URI: "https://syde-webtst-01:9090", 
      SCOPE: ['openid','email'] 
  },
  baseapiurl:"https://syde-apptst-01:1111/api/"
};