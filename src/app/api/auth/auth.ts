export const login = async (username: string, password: string) => {
  const url = `${process.env.BE_URL}/auth/login`;
  const body = JSON.stringify({
    username,
    password,
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
