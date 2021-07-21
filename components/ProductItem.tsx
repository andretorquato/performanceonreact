import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import dynamic from "next/dynamic";

const AddProductToWishList = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist").then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);
interface ProductItemsProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}
function ProductItemComponent({ product, onAddToWishList }: ProductItemsProps) {
  const [isAddingToWishlist, setIsAddingToWishList] = useState(false);

  
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        {" "}
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);