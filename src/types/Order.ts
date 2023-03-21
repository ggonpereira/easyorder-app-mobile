type Product = {
  product: string;
  quantity: number;
};

export type Order = {
  table: string;
  status: string;
  createdAt: Date;
  products: Product[];
};
