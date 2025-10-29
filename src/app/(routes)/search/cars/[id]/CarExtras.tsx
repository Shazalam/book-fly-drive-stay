export default function CarExtras({ data }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Extras</h3>
      <ul className="divide-y divide-gray-200">
        {data.extras.map((extra: any) => (
          <li key={extra.name} className="flex justify-between py-2 text-sm">
            <span>{extra.name}</span>
            <span>${extra.price} / day</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
