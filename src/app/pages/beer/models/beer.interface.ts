export interface BeerInterface {
  id: number;
  name: string;
  tagline: string;
  first_brewed: Date;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: Object;
  ingredients: Object;
  food_pairing: any[];
  brewers_tips: string;
  contributed_by: string;
}
