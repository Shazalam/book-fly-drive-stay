import { NextResponse } from "next/server";

export async function GET() {
  // Real car images from reliable sources
  const carImages = [
    // SUVs
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop", // BMW X5
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop", // Chevrolet Tahoe
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop", // Jeep Wrangler
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop", // Range Rover
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop", // Mercedes GLE
    "https://images.unsplash.com/photo-1627163439134-7a8c47e08298?w=600&h=400&fit=crop", // Audi Q7
    
    // Sedans
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop", // Toyota Camry
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop", // Honda Accord
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop", // BMW 3 Series
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=400&fit=crop", // Mercedes C-Class
    "https://images.unsplash.com/photo-1563720223485-41b7b4c4170e?w=600&h=400&fit=crop", // Audi A4
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop", // Lexus ES
    
    // Luxury Cars
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop", // Porsche 911
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop", // Mercedes S-Class
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop", // BMW 7 Series
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop", // Lamborghini
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop", // Ford Mustang
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop", // Rolls Royce
    
    // Electric Cars
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop", // Tesla Model S
    "https://images.unsplash.com/photo-1593941707882-a5bba5331fea?w=600&h=400&fit=crop", // Tesla Model 3
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop", // Tesla Model X
    "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop", // Tesla Model Y
    "https://images.unsplash.com/photo-1622418682675-1b191a2b1335?w=600&h=400&fit=crop", // Audi e-tron
    "https://images.unsplash.com/photo-1617814076662-1c6d3ce0d0af?w=600&h=400&fit=crop", // Porsche Taycan
    
    // Compact & Economy
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop", // Volkswagen Golf
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop", // Hyundai Elantra
    "https://images.unsplash.com/photo-1551524164-6ca64fb6e33c?w=600&h=400&fit=crop", // Toyota Corolla
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop", // Honda Civic
    "https://images.unsplash.com/photo-1570730322324-9eeb25330e6a?w=600&h=400&fit=crop", // Ford Focus
    "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop", // Nissan Sentra
    
    // Convertibles
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop", // Convertible sports car
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop", // BMW Convertible
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop", // Muscle car convertible
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop", // Luxury convertible
    
    // Minivans & Family
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop", // Honda Odyssey
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop", // Toyota Sienna
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop", // Chrysler Pacifica
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop", // Kia Carnival
    
    // Trucks
    "https://images.unsplash.com/photo-1563720223485-41b7b4c4170e?w=600&h=400&fit=crop", // Ford F-150
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop", // Chevrolet Silverado
    "https://images.unsplash.com/photo-1627163439134-7a8c47e08298?w=600&h=400&fit=crop", // RAM 1500
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop", // Toyota Tundra
  ];

  const cars = Array.from({ length: 60 }).map((_, i) => {
    const companies = ["Hertz", "Avis", "Enterprise", "Budget", "Alamo", "Thrifty", "National", "Dollar"];
    const carTypes = ["SUV", "Sedan", "Hatchback", "Convertible", "Luxury", "Electric", "Minivan", "Truck"];
    const transmissions = ["Automatic", "Manual"];
    const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
    const locations = ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami", "Dallas", "Las Vegas", "Seattle"];
    
    const carMakes = {
      SUV: ["Toyota RAV4", "Honda CR-V", "Ford Explorer", "Jeep Wrangler", "BMW X5", "Mercedes GLE", "Audi Q5", "Nissan Rogue"],
      Sedan: ["Toyota Camry", "Honda Accord", "BMW 3 Series", "Mercedes C-Class", "Audi A4", "Hyundai Sonata", "Kia Optima", "Nissan Altima"],
      Hatchback: ["Volkswagen Golf", "Honda Civic Hatchback", "Toyota Corolla Hatchback", "Ford Focus", "Hyundai Elantra GT", "Mazda 3"],
      Convertible: ["Ford Mustang Convertible", "BMW 4 Series Convertible", "Audi A5 Cabriolet", "Mercedes E-Class Cabrio", "Porsche 911 Cabriolet"],
      Luxury: ["Mercedes S-Class", "BMW 7 Series", "Audi A8", "Lexus LS", "Porsche Panamera", "Jaguar XJ"],
      Electric: ["Tesla Model 3", "Tesla Model S", "Tesla Model Y", "Audi e-tron", "Ford Mustang Mach-E", "Hyundai Ioniq 5", "Kia EV6"],
      Minivan: ["Honda Odyssey", "Toyota Sienna", "Chrysler Pacifica", "Kia Carnival"],
      Truck: ["Ford F-150", "Chevrolet Silverado", "RAM 1500", "Toyota Tundra", "GMC Sierra"]
    };

    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const carType = random(carTypes) as keyof typeof carMakes;
    const carName = random(carMakes[carType] || carMakes.SUV);
    
    // Get a realistic price based on car type
    const getPricePerDay = (type: string) => {
      const prices = {
        SUV: { min: 45, max: 120 },
        Sedan: { min: 35, max: 80 },
        Hatchback: { min: 30, max: 60 },
        Convertible: { min: 70, max: 200 },
        Luxury: { min: 90, max: 300 },
        Electric: { min: 60, max: 150 },
        Minivan: { min: 50, max: 100 },
        Truck: { min: 55, max: 130 }
      };
      const range = prices[type as keyof typeof prices] || prices.SUV;
      return (Math.random() * (range.max - range.min) + range.min).toFixed(2);
    };

    // Get appropriate features based on car type
    const getFeatures = (type: string) => {
      const baseFeatures = ["Air Conditioning", "GPS Navigation", "Bluetooth"];
      
      const additionalFeatures = {
        SUV: ["All-Wheel Drive", "Spacious Interior", "Roof Racks"],
        Sedan: ["Fuel Efficient", "Comfortable Ride", "Trunk Space"],
        Hatchback: ["Compact Size", "Easy Parking", "Foldable Seats"],
        Convertible: ["Open Roof", "Premium Sound System", "Sport Mode"],
        Luxury: ["Leather Seats", "Heated Seats", "Premium Sound", "Sunroof", "Advanced Safety"],
        Electric: ["Fast Charging", "Regenerative Braking", "Touchscreen Display", "Keyless Entry"],
        Minivan: ["Sliding Doors", "Third Row Seating", "DVD Player", "Multiple USB Ports"],
        Truck: ["Towing Package", "Bed Liner", "4WD", "Off-road Capable"]
      };
      
      return [...baseFeatures, ...(additionalFeatures[type as keyof typeof additionalFeatures] || [])].slice(0, 4);
    };

    // Get realistic seats based on car type
    const getSeats = (type: string) => {
      const seats = {
        SUV: [5, 7],
        Sedan: [5],
        Hatchback: [5],
        Convertible: [4],
        Luxury: [4, 5],
        Electric: [5],
        Minivan: [7, 8],
        Truck: [3, 5, 6]
      };
      const options = seats[type as keyof typeof seats] || [5];
      return random(options.map(String));
    };

    return {
      _id: `car-${i + 1}`,
      company: random(companies),
      carName: carName,
      carType: carType,
      transmission: random(transmissions),
      fuelType: random(fuelTypes),
      pricePerDay: getPricePerDay(carType),
      seats: getSeats(carType),
      pickupLocation: random(locations),
      dropoffLocation: random(locations),
      pickupDate: "2025-10-25",
      dropoffDate: "2025-10-30",
      rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
      available: Math.random() > 0.1,
      imageUrl: carImages[i % carImages.length], // Cycle through real images
      features: getFeatures(carType),
      description: `A ${random(["reliable", "stylish", "fuel-efficient", "spacious", "luxurious"])} ${carName} perfect for ${random(["city driving", "long trips", "family vacations", "business travel"])}.`,
      bookingPolicy: "Free cancellation within 24 hours. No hidden fees. Insurance included.",
      mileage: `${Math.floor(Math.random() * 20000) + 5000} miles`,
      year: Math.floor(Math.random() * 5) + 2020,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  });

  return NextResponse.json(cars);
}