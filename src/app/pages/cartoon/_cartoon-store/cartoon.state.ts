import { Character } from '../models/character';
import { Info } from '../models/info';

export interface CartoonState {
  info: Info;
  characters: Character[];
  selectedCharacter: Character;
}

export const initialCartoonState: CartoonState = {
  info: null,
  characters: null,
  selectedCharacter: null,
};
