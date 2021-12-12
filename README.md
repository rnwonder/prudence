# Prudence


## Api Documentation

### Important Notes
When ever you see these keywords in the api links this is what they mean. Also note that keywords are the data you are to pass to the api. they are written in quotes("") for easier identification

"code" : The "code" here is the auth code we get from mono connect when a user logs in with the widget   

"id: : The "id" here is the account id for the users logged in bank account   

"period" : This is time duration for the bank statement in months( 1-12) e.g last12months   

"output" : This simply returns the output format for the statement. It can be "jason" or "pdf"   

"name" :  This is the name of the business you are searching for   

"busId" : This is the business id you get from after searching for the business   


### Base url 
https://limitless-temple-51492.herokuapp.com


### Get Account Id 
https://limitless-temple-51492.herokuapp.com/api/id/get/"code"



### Reauthenticate Id
https://limitless-temple-51492.herokuapp.com/api/id/reAuth/"id"


### Unlink account
This removes our access to the user account details
https://limitless-temple-51492.herokuapp.com/api/unlink/"id"

### Get Statement
https://limitless-temple-51492.herokuapp.com/api/statement?id="id"&period="period"&output="output"

### Get Account Information
https://limitless-temple-51492.herokuapp.com/api/info/"id"

### Get estimated income
https://limitless-temple-51492.herokuapp.com/api/income/"id"

### Search business on CAC
https://limitless-temple-51492.herokuapp.com/api/cac/search/"name"

### Search business shareholder details
https://limitless-temple-51492.herokuapp.com/api/cac/shareholder/"busId"













