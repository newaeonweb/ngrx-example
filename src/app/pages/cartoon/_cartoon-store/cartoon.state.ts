import { Character } from '../models/character';

export interface CartoonState {
  characters: Character[];
  selectedCharacter: Character;
}

export const initialCartoonState: CartoonState = {
  characters: null,
  selectedCharacter: null,
};
