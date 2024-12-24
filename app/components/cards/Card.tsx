import React from "react";
import Image from "next/image";

interface CardItem {
  name: string;
  url: string
}
interface Item{
  item: any
}
const Card: React.FC<Item> = ({ item }) => {
  return (
    <div className="card">
      <h2 className="text-xl">{item.title}</h2>
      <img alt={item.cap} src={item.img} />
      <p>{item.cap}</p>
    </div>
  );
};

export default Card;
