// import { z } from "zod";

// // ✅ Generate 12-hour time slots with 30-min intervals + “Midnight” & “Noon”
// export const TIME_SLOTS = (() => {
//   const slots: string[] = [];

//   for (let hour = 0; hour < 24; hour++) {
//     for (let min = 0; min < 60; min += 30) {
//       let label: string;

//       if (hour === 0 && min === 0) label = "Midnight";
//       else if (hour === 12 && min === 0) label = "Noon";
//       else {
//         const ampm = hour >= 12 ? "PM" : "AM";
//         const displayHour = hour % 12 === 0 ? 12 : hour % 12;
//         const displayMin = min === 0 ? "00" : min.toString().padStart(2, "0");
//         label = `${displayHour}:${displayMin} ${ampm}`;
//       }

//       slots.push(label);
//     }
//   }

//   return slots;
// })();
// // ✅ 1. Define schema using dynamic TIME_SLOTS
// export const carRentalSchema = z.object({
//   // Location fields
//   pickupLocation: z.string().min(3, "Pick-up location is required"),
//   dropoffLocation: z.string().optional(),

//   // Date & Time fields
//   pickupDate: z.string().min(1, "Pick-up date is required"),
//   pickupTime: z.enum([TIME_SLOTS[0], ...TIME_SLOTS.slice(1)] as [string, ...string[]]),
//   dropoffDate: z.string().min(1, "Drop-off date is required"),
//   dropoffTime: z.enum([TIME_SLOTS[0], ...TIME_SLOTS.slice(1)] as [string, ...string[]]),

//   // Options
//   isDropoffSame: z.boolean().default(false),
//   addHotel: z.boolean().default(false),
//   addFlight: z.boolean().default(false),
// });

// // ✅ 2. Export TS type
// export type CarRentalFormValues = z.infer<typeof carRentalSchema>;




// app/(types)/CarRentalSchema.ts




import { z } from "zod";

// -----------------------------
// 🧩 Schema Definition
// -----------------------------

export const carRentalSchema = z.object({
  pickupLocation: z.string().min(1, "Pickup location is required"),
  dropoffLocation: z.string().min(1, "Dropoff location is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  dropoffDate: z.string().min(1, "Dropoff date is required"),
  dropoffTime: z.string().min(1, "Dropoff time is required"),
  isDropoffSame: z.boolean(),
  addHotel: z.boolean(),
  addFlight: z.boolean()
});

// -----------------------------
// 🧾 Type Inference
// -----------------------------
export type CarRentalFormValues = z.infer<typeof carRentalSchema>;

// -----------------------------
// ⏰ Time Slot Constants
// -----------------------------
export const TIME_SLOTS: string[] = [
  "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
  "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
  "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
];

// -----------------------------
// 🚗 Car Type Interface
// -----------------------------
export interface Car {
  _id: string;
  company: string;
  carName: string;
  carType: string;
  transmission: string;
  fuelType: string;
  pricePerDay: string;
  seats: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
  rating: string;
  available: boolean;
  imageUrl: string;
  features: string[];
  description: string;
  bookingPolicy: string;
  mileage: string;
  year: number;
  createdAt: string;
  updatedAt: string;
}
