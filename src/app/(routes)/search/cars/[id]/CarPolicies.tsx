export default function CarPolicies() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Rental Policies</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Free cancellation up to pick-up</li>
        <li>Age surcharge for drivers under 25 years</li>
        <li>Valid driver’s license required</li>
        <li>Credit card required for booking</li>
      </ul>
    </div>
  );
}
