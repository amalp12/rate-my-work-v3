import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import crypto from 'crypto-browserify';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))

}

export function generateHash(inputString: any) {
  // const hash = crypto.createHash('sha256'); // Create a SHA-256 hash instance
  // hash.update(inputString); // Update the hash with the data
  // return hash.digest('hex'); // Retu
  return inputString
}
