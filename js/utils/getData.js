const URL = "https://jsonplaceholder.typicode.com/:resource";

const getData = async (request) => {
  try {
    const res = await fetch(URL.replace(":resource", request));
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

export default getData;
