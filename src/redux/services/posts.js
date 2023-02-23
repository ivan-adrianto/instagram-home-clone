import api from "./api";

// Get Posts
export async function getPosts() {
  const res = await api.get("/questions");
  return res;
}
