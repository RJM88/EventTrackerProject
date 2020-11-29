export class Workout {
  id: number;
  name: string;
  description: string;
  location: string;
  day: string;
  date: string;
  img: string;
  weight: string;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    location?: string,
    day?: string,
    date?: string,
    img?: string,
    weight?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.day = day;
    this.date = date;
    this.img = img;
    this.weight = weight;
  };
}
