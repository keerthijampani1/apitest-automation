API Testing for the page Swagger Petstore. URL : https://petstore.swagger.io/ Tool : Playwright Language : TypeScript


 The input has  been taken from the apiTestData folder using json files and can be modified as per requirement.

 You can run the tests by cloning the repo into the local machine and by executing the following command:
 npx playwright test

 As the tests are all api related, so placed in Apitests folder and gave this path in package.config file

001.createPet.spec: This is the test case to create a pet and the input is taken from the json file, "postRequesBody.json"
002.createPetWithNullData.spec: This is the test case to create a pet and the input is taken from the json file, "postRequesBody_NullData"
003.updatePet.spec: This is the test case to test the put api call in the petstore. A new pet has been created in the beforeEach hook and the id of pet has been passed to the test to update.
004.getPet.spec: This is the test case to test the get api call in the petstore. A new pet has been created in the beforeEach hook and the id of pet has been passed to the test to retrieve.
005.deletePet.spec: This is the test case to test the delete api call in the petstore. A new pet has been created in the beforeEach hook and the id of pet has been passed to the test to delete.
006.createPetWithPOM.spec: This is the test case to create a pet and the input is taken from the json file, "postRequesBody.json", same as 001.createPet.spec.ts testcase however implemented Page object model in this testcase.
007.getPetsByAvailableStatus.spec: This is the test case to retrieve the pets in store by the status of availability by using the get api call and the query parameter, /findByStatus?status=available.
008.getPetsByPendingStatus.spec: This is the test case to retrieve the pets in store by the status of availability by using the get api call and the query parameter, /findByStatus?status=pending.
009.getPetsBySoldStatus.spec: This is the test case to retrieve the pets in store by the status of availability by using the get api call and the query parameter, /findByStatus?status=sold.