// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

const port = "http://localhost:3003";
export const api = {
  addContact: port + '/api/hubspot/createContacts',
  viewContact: port + '/api/hubspot/getAllContacts',
  checkContact: port + '/api/hubspot/checkContacts',
  addData: port + '/api/hubspot/table/add',
  addSurvey: port + '/api/hubspot/table/addSurvey',
  addSalesforceContact: port + '/api/salesforce/createContacts',
  viewSalesforceContact: port + '/api/salesforce/getAllContacts',
  checkSalesforceContact: port + '/api/salesforce/getAllContacts',
  addSalesforceData: port + '/api/salesforce/addDeck',
  addSalesforceSurvey: port + '/api/salesforce/addSurvey'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
