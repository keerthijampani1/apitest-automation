import { expect, test } from "@playwright/test";
let petId: number;

test.beforeEach(async ({ request, baseURL }) => {
  const postRequesBody_pet = require(".././apiTestData/petApiTestData/postRequesBody_NullData.json");

  const response = await request.post(`${baseURL}/pet`, {
    data: postRequesBody_pet,
  });
  expect(response.status()).toBe(200);

  const postResponse_jsonInfo = await response.json();
  petId = postResponse_jsonInfo.id;

  console.log("petId: ", petId);
});

test("delete pet", async ({ request, baseURL }) => {
  const _response = await request.delete(`${baseURL}` + "/pet/" + petId);
  expect(_response.status()).toBe(200);
});
