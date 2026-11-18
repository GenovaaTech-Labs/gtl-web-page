export const CONTACT_EMAIL = "connect@genovaatechlabs.com";

export const COURSES = [
  "C Programming",
  "C++ Programming",
  "Embedded Linux",
  "RTOS Development",
  "Embedded AI Programming",
  "IoT System Design",
  "FPGA Development",
  "Mini Projects",
  "Major Projects",
] as const;

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
