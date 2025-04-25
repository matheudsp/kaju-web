
import { apiRequest } from './api-client';


export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
}

export interface CurrentUser {
  email: string;
  nickname: string;
  id: number;
  roles: string[];
}

class AuthService {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>({
      method: 'POST',
      url: '/auth/signin',
      data: credentials,
    });
  }

  async signup(userData: SignupRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>({
      method: 'POST',
      url: '/auth/signup',
      data: userData,
    });
  }

  async logout(): Promise<AuthResponse> {
    return apiRequest<AuthResponse>({
      method: 'POST',
      url: '/auth/signout',
    });
  }

  async getCurrentUser(): Promise<CurrentUser | null> {
    try {
      
      const response = await apiRequest<CurrentUser>({
        method: 'GET',
        url: '/auth/me',
      });
      return response;
    } catch (error) {
      return null;
    }
  }

  isAuthenticated(): boolean {
    // Check if we have a JWT cookie
    // This is just a client-side check, actual validation happens on the server
    return document.cookie.includes('JWT=');
  }
}

export default new AuthService();