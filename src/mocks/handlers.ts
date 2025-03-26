import { http, HttpResponse } from "msw";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const User = [
  {
    id: 1,
    email: "msw-user1@example.com",
    password: "password1",
    nickname: "msw-user1",
  },
  {
    id: 2,
    email: "msw-user2@example.com",
    password: "password2",
    nickname: "msw-user2",
  },
];

export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    console.log("로그인");
    return HttpResponse.json(User[1], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
  http.post(`${baseUrl}/api/logout`, () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.post(`${baseUrl}/api/signup`, async () => {
    console.log("회원가입");
    return HttpResponse.text(JSON.stringify("user_exists"), {
      status: 403,
    });
    // return HttpResponse.text(JSON.stringify("ok"), {
    //   headers: {
    //     "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
    //   },
    // });
  }),
];
