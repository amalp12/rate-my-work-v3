import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BinaryLike, createHash } from 'crypto';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))

}

export function generateHash(inputString: BinaryLike) {
    return createHash('sha256').update(inputString).digest('hex');
}
