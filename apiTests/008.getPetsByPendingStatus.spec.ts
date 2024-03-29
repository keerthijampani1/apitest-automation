import { expect, test } from "@playwright/test";

test("get pets by pending status", async ({ request, baseURL }) => {
  const _response = await request.get(
    `${baseURL}` + "/pet/findByStatus?status=pending"
  );
  expect(_response.status()).toBe(200);
});
