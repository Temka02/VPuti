import { http, HttpResponse } from "msw";
import { MOCK_USER_PROFILE } from "../data/mockProfile";

export const authHandlers = [
  http.post("/api/auth/login", () => {
    return HttpResponse.json({
      token: "mock-jwt-token-xyz",
      user: {
        id: MOCK_USER_PROFILE.id,
        name: MOCK_USER_PROFILE.name,
        surname: MOCK_USER_PROFILE.surname,
      },
    });
  }),

  http.post("/api/auth/register", async ({ request }) => {
    const body = (await request.json()) as any;

    return HttpResponse.json(
      {
        accessToken: "mock-access-token-new-user",
        user: {
          id: "user-new-generated-id",
          name: body.name || "Имя",
          surname: body.surname || "Фамилия",
        },
      },
      { status: 201 },
    );
  }),

  http.get("/api/auth/me", ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new HttpResponse(null, { status: 401 });
    }

    return HttpResponse.json({
      id: MOCK_USER_PROFILE.id,
      name: MOCK_USER_PROFILE.name,
      surname: MOCK_USER_PROFILE.surname,
    });
  }),

  http.get("/api/user/profile", ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
      return new HttpResponse(JSON.stringify({ message: "Не авторизован" }), {
        status: 401,
      });
    }

    return HttpResponse.json(MOCK_USER_PROFILE);
  }),
];
