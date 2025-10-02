import api from "@/lib/axios";


export const userApi = {
  syncUser: async (data: {
    clerkId: string
    email: string
    firstName: string
    lastName: string
  }) => {
    const res = await api.post("/users/sync", data);
    return res.data;
  }
}