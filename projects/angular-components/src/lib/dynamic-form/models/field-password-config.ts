import {AbstractMatformfieldConfig} from './abstract-matformfield-config';

export interface AcFieldPasswordConfig extends AbstractMatformfieldConfig {
  type: 'password';
  minlength: number;
  maxlength?: number;
  requiresDigit?: boolean;
  requiresUppercase?: boolean;
  requiresLowercase?: boolean;
  requiresSpecialChars?: boolean;
  specialChars?: string[];
  labels?: {
    showPassword?: string;
    hidePassword?: string;
    minlength?: string;
    maxlength?: string;
    requiresDigit?: string;
    requiresUppercase?: string;
    requiresLowercase?: string;
    requiresSpecialChars?: string;
    iconError?: string;
    iconSuccess?: string;
  }
}
