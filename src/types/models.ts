export type Cat = {
  id: string;
  length: string;
  image?: string;
  minWeight: number;
  maxWeight: number;
  minLife: number;
  maxLife: number;
  name: string;
};

export type Cats = {
  cats: Cat[];
};
