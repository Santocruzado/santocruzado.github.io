import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Cards />
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>Lorem Ipsum is simply dummy text ...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam
          sequi dolores! Facilis, quos? Doloremque nemo repellat aliquam iure ea
          praesentium ipsum excepturi illo id amet, iste esse fugit ratione
          nesciunt voluptatum, nulla omnis ullam numquam labore voluptate.
          Doloribus eos sint, amet corporis inventore quisquam sit explicabo non
          animi, voluptate assumenda, aliquam ipsam sequi. Magnam esse excepturi
          perspiciatis iusto consectetur tempora vel amet ipsum iste? Sapiente
          maiores, maxime ad molestias fuga numquam sed error nemo quos qui
          neque cum aliquid magni sunt explicabo asperiores possimus eum nulla
          quam debitis facilis dolores perferendis deleniti! Iusto, porro! Vero
          amet nam quod rem?
        </p>
      </div>
    </>
  );
}
