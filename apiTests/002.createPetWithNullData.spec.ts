import { expect, test } from "@playwright/test";

test("create pet with null data", async ({ request, baseURL }) => {
  const postRequesBody_pet = require(".././apiTestData/petApiTestData/postRequesBody_NullData.json");

  const response = await request.post(`${baseURL}/pet`, {
    data: postRequesBody_pet,
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
});
