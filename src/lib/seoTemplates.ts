import { MUNICIPALITY, SITE } from '@/config/site';

export function formatStandardTitle(subject: string): string {
  return `${subject} | ${SITE.name}`;
}

export function formatStandardDescription(subject: string): string {
  return `Learn more about ${subject} through ${SITE.name}, the civic information portal of ${MUNICIPALITY.fullName}, ${MUNICIPALITY.province}.`;
}
