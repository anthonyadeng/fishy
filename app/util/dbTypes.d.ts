type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
enum TankType {
  Freshwater,
  Saltwater,
}
type Tank = {
  id: string;
  name: string;
  size: [number, number, number];
  type: TankType;
  description: string;
};

type Link = {
  id: string;
  name: string;
  url: string;
};
