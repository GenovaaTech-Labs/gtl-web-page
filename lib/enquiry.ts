import { TRAINING } from "@/lib/content";

export const CONTACT_EMAIL = "connect@genovaatechlabs.com";

/** Program names for the enquiry form – kept in sync with the Training section. */
export const COURSES: readonly string[] = TRAINING.map((program) => program.title);

export const ENQUIRY_TYPES = {
  project: "Custom Project",
  training: "Training Registration",
  general: "General Enquiry",
} as const;

export type EnquiryType = keyof typeof ENQUIRY_TYPES;

export function isEnquiryType(value: unknown): value is EnquiryType {
  return typeof value === "string" && Object.hasOwn(ENQUIRY_TYPES, value);
}

export type EnquiryField =
  | "type"
  | "name"
  | "email"
  | "phone"
  | "organization"
  | "course"
  | "message";

export type EnquiryResult =
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<EnquiryField, string>>;
    };
