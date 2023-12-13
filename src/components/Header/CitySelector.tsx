import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface City {
  name: string;
  code: string;
}

export default function Home() {

  const [city, setCity] = useState<City>({
    name: "青岛",
    code: "qd"
  });

  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => navigate("/city")}
    >
      <span>{city.name}</span>
      <p className="text-xl">🡵</p>
    </div>
  );
}
