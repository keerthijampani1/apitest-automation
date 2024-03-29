import { expect, test } from "@playwright/test";

test("get pets by available status", async ({ request, baseURL }) => {
  const _response = await request.get(
    `${baseURL}` + "/pet/findByStatus?status=available"
  );
  expect(_response.status()).toBe(200);
});
