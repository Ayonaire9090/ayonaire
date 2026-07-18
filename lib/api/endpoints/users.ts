import { apiClient } from "../client";
import { UserProfile, ApiResponse } from "../types";

export const usersApi = {
  addProfilePicture: (formData: FormData) =>
    apiClient<{ success: boolean; message: string; profile: { url: string; publicId: string } }>(
      "/api/v1/auth/add-profile",
      {
        method: "POST",
        body: formData,
        // Let the browser set Content-Type to multipart/form-data with the correct boundary
        headers: { "Content-Type": undefined as any },
        requireAuth: true,
      }
    ),

  editProfile: (formData: FormData) =>
    apiClient<{ success: boolean; message: string; user: UserProfile }>(
      "/api/v1/auth/edit-profile",
      {
        method: "PUT",
        body: formData,
        headers: { "Content-Type": undefined as any },
        requireAuth: true,
      }
    ),
};
