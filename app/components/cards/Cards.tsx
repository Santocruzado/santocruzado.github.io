import Link from "next/link";
import { getHabitats } from "../../api/Habitats";

export default async function Cards() {
  const cards = await getHabitats();

  return (
    <div className="cards flex flex-col">
      {cards.map((item, index) => (
        <div key={index}>
          <Link href={item.url}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
