import { z } from "zod";

// ✅ Generate 12-hour time slots with 30-min intervals + “Midnight” & “Noon”
export const TIME_SLOTS = (() => {
  const slots: string[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 30) {
      let label: string;

      if (hour === 0 && min === 0) label = "Midnight";
      else if (hour === 12 && min === 0) label = "Noon";
      else {
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        const displayMin = min === 0 ? "00" : min.toString().padStart(2, "0");
        label = `${displayHour}:${displayMin} ${ampm}`;
      }

      slots.push(label);
    }
  }

  return slots;
})();
// ✅ 1. Define schema using dynamic TIME_SLOTS
export const carRentalSchema = z.object({
  // Location fields
  pickupLocation: z.string().min(3, "Pick-up location is required"),
  dropoffLocation: z.string().optional(),

  // Date & Time fields
  pickupDate: z.string().min(1, "Pick-up date is required"),
  pickupTime: z.enum([TIME_SLOTS[0], ...TIME_SLOTS.slice(1)] as [string, ...string[]]),
  dropoffDate: z.string().min(1, "Drop-off date is required"),
  dropoffTime: z.enum([TIME_SLOTS[0], ...TIME_SLOTS.slice(1)] as [string, ...string[]]),

  // Options
  isDropoffSame: z.boolean().default(false),
  addHotel: z.boolean().default(false),
  addFlight: z.boolean().default(false),
});

// ✅ 2. Export TS type
export type CarRentalFormValues = z.infer<typeof carRentalSchema>;
