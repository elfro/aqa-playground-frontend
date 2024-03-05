export const signIn = async (data: FormData) => {
  const url = `${process.env.BE_URL}/auth/login`;
  const body = JSON.stringify({
    username: data.get('email'),
    password: data.get('password'),
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
