import { Page, test, expect, request } from "@playwright/test";

export class PetStore {
  private _page;
  constructor(page) {
    this._page = page;
  }

  async getPet(baseURL, petid) {
    const _response = await this._page.request.get(
      `${baseURL}` + "/" + `${petid}`
    );
    expect(_response.status()).toBe(200);
  }

  async createPet(baseURL) {
    const postRequesBody_pet = require("../apiTestData/petApiTestData/postRequesBody.json");

    const _response = await this._page.request.post(`${baseURL}/pet`, {
      data: postRequesBody_pet,
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();

    const postResponse_pet = await _response.json();
  }

  async updatePet(baseURL) {
    const _response = await this._page.request.put(`${baseURL}/pet`, {
      data: {
        id: 0,
        category: {
          id: 0,
          name: "string",
        },
        name: "doggie",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
  }

  async deletePet(baseURL, petid) {
    const _response = await this._page.request.delete(
      `${baseURL}` + "/" + `${petid}`
    );
    expect(_response.status()).toBe(200);
  }
}
