import priceFormat from "@/utils/priceFormat";
import Image from "next/image";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  currency: string;
};

export default function Product({
  name,
  image,
  price,
  currency,
}: ProductProps) {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
      />
      <h1>{name}</h1>
      <p>{priceFormat(price)}</p>
    </div>
  );
}
