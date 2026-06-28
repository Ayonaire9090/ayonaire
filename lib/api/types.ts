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
  password?: string;
  phoneNumber?: string;
  profile?: {
    url: string;
    publicId: string;
  };
  isEmailVerified?: boolean;
  role: "admin" | "instructor" | "student" | "user";
  status: "active" | "inactive" | "suspended";
  cohorts?: string[];
  loginHistory?: [
    {
      ip: string;
      userAgent: string;
      loggedInAt: string;
    },
  ];
  activity?: [
    {
      action: string;
      performedAt: string;
      meta: {};
    },
  ];
  verificationToken?: string;
  verificationTokenExpiresAt?: string;
  resetPasswordToken?: string;
  resetPasswordTokenExpiresAt?: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any; // Allow other properties for flexibility
}

// Authentication
export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: UserProfile;
  data?: {
    token: string;
    user: UserProfile;
  };
}

export interface AuthRegisterResponse {
  success: boolean;
  message: string;
  user: UserProfile;
}

export interface VerifyEmailPayload {
  token: string;
}

export interface ResendVerificationEmailPayload {
  email: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password?: string; // Sometimes the token is sent in URL, but body is just password (and maybe token)
}

export interface AcceptInvitePayload {
  name: string;
  password: string;
}

export interface LogoutPayload {
  refreshToken: string;
  allDevices?: boolean;
}

// User Profile
export interface EditProfilePayload {
  name?: string;
  phoneNumber?: string;
  profile?: File; // For multipart/form-data
}

// Instructor
export interface ApplyInstructorPayload {
  bio: string;
  expertise: string[];
  instructorCourseCategory: string;
}
