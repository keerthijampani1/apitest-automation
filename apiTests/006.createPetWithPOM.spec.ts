import { expect, test } from "@playwright/test";
import { PetStore } from "../pages/petStore";

test("create pet", async ({ page, baseURL }) => {
  let petStore = new PetStore(page);
  const res = await petStore.createPet(baseURL);
});
