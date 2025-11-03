// types/HotelSchema.ts

import { z } from "zod";

// Define the room schema
// const roomSchema = z.object({
//   adults: z.number().min(1, "Must have at least one adult per room"),
//   children: z.number().min(0),
//   // In a real app, you'd add an array for child ages here
// });

// ✅ 1. Zod Schema
export const hotelSchema = z.object({
  // Remove .default() to make it consistently required
  searchType: z.enum(["single", "multi"]),
  
  // Primary inputs
  destination: z.string().min(3, "Destination is required"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  
  // Guest/Room Details
  rooms: z.number().min(1, "Need at least one room"),
  adults: z.number().min(1, "Need at least one adult"),
  children: z.number().min(0),
  
  // Bundle options - remove .default() here too
  addCar: z.boolean(),
  addFlight: z.boolean(),
});

// ✅ 2. Type
export type HotelFormValues = z.infer<typeof hotelSchema>;
export type GuestRoomDetails = Pick<HotelFormValues, 'rooms' | 'adults' | 'children'>;