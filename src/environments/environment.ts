export const environment = {
  production: false,
  qa: false,
  dev: false,
  stag: false,
  oktaconfig: { 
      CLIENT_ID: "0oab4enjwsVF4ZMTM357", 
      ISSUER: "https://aristocrat.okta.com", 
      LOGIN_REDIRECT_URI: "https://sydc-appdev-01:9090/home/explorer/search", 
      LOGOUT_REDIRECT_URI: "https://sydc-appdev-01:9090",
      SCOPE: ['openid','email'] 
  },
  baseapiurl:"https://sydc-appdev-01:1111/api/"
};
