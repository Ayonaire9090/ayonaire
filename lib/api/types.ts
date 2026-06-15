export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  [key: string]: any;
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: string[];
  detail?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  profile?: {
    url: string;
    publicId: string;
  };
  role: "admin" | "instructor" | "student";
  status: string;
  cohorts?: string[];
  createdAt: string;
  updatedAt: string;
  [key: string]: any; // Allow other properties for flexibility
}

// Authentication
export interface LoginResponse {
  success: boolean;
  token: string;
  user: UserProfile;
}

export interface AuthRegisterResponse {
  success: boolean;
  message: string;
  user: UserProfile;
}
