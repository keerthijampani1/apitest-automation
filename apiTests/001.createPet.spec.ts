import { expect, test } from "@playwright/test";

test("create pet", async ({ request, baseURL }) => {
  const postRequesBody_pet = require(".././apiTestData/petApiTestData/postRequesBody.json");

  const response = await request.post(`${baseURL}/pet`, {
    data: postRequesBody_pet,
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const postResponse_jsonInfo = await response.json();
  expect(postResponse_jsonInfo).toHaveProperty("name", postRequesBody_pet.name);
});
