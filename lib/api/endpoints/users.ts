import { apiClient } from "../client";
import { ApiResponse } from "../types";

// Response shapes confirmed against the live Swagger spec
// (https://ayonaire.onrender.com/api-docs/) - both endpoints wrap their
// result in the standard { success, data } envelope, not a flat
// { success, message, profile/user } shape as previously assumed. That
// mismatch meant onSuccess's `data.profile`/`data.user` checks were always
// undefined, so the auth store never picked up the newly uploaded image.
export interface EditProfileResponseData {
  name?: string;
  bio?: string;
  linkedin?: string;
  website?: string;
  company?: string;
  instagram?: string;
  profile?: { url: string; publicId: string } | null;
  coverPhoto?: { url: string; publicId: string } | null;
}

export const usersApi = {
  addProfilePicture: (formData: FormData) =>
    apiClient<ApiResponse<{ profile: { url: string; publicId: string } }>>(
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
    apiClient<ApiResponse<EditProfileResponseData>>(
      "/api/v1/auth/edit-profile",
      {
        method: "PUT",
        body: formData,
        headers: { "Content-Type": undefined as any },
        requireAuth: true,
      }
    ),
};
