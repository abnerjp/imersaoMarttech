interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function login(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasdasdgsadf2134sdf23cd2d23d32d',
        user: {
          name: 'Abner',
          email: 'abner.pelisser@gmail.com',
        },
      });
    }, 2000);
  });
}