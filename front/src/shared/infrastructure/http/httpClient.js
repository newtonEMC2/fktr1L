export const get = async ({ url }) => {
  try {
    return await fetch(url, {
      method: "GET",
    });
  } catch (error) {
    console.log(error);
  }
};

export const post = async ({ url, data }) => {
  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  } catch (error) {
    console.log(error);
  }
};
