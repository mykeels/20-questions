import crypto from 'crypto';

export function generateUniqueKey() {
  return crypto.randomBytes(5).toString('hex');
}
