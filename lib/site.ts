export const SITE_URL = "https://www.genovaatechlabs.com";
export const SITE_NAME = "GenovaaTech Labs";
export const SITE_TITLE = "GenovaaTech Labs | Embedded Systems • IoT • Edge AI";
export const SITE_DESCRIPTION =
  "GenovaaTech Labs – Embedded Systems Development, IoT Solutions, Edge AI Products, and Engineering Training Programs.";

/**
 * Social / contact links shown in the footer. Leave a value as "" to hide it.
 * e.g. linkedin: "https://www.linkedin.com/company/your-page"
 *      whatsapp: "https://wa.me/91XXXXXXXXXX"  (country code + number, no + or spaces)
 */
export const SOCIAL_LINKS: Record<"linkedin" | "instagram" | "youtube" | "whatsapp", string> = {
  linkedin: "",
  instagram: "",
  youtube: "",
  whatsapp: "",
};

/** Optional – shown in the footer when filled in. */
export const PHONE: string = "";
export const ADDRESS: string = "";

/** Google Forms – used until the /contact form's email backend is set up. */
export const FORMS = {
  project: "https://forms.gle/T26YRJUGvZbzGdyX8",
  services: "https://forms.gle/cPjsh5BADUWXDxhL8",
  training: "https://forms.gle/4CAXfvvgSEZoz46CA",
};

/** Home page sections shown in the navbar and footer (in page order). */
export const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
