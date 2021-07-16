import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const total = results.reduce((sub, current) =>{
    
    return sub;
  }, 0);
  return (
    <div>
      {results.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}
