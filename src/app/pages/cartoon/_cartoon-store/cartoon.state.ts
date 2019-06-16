import { Character } from '../models/character';
import { Info } from '../models/info';
import { Episode } from '../models/episode';

export interface CartoonState {
  info: Info;
  characters: Character[];
  selectedCharacter: Character;
  episodes: Episode[];
  selectedEpisode: Episode;
}

export const initialCartoonState: CartoonState = {
  info: null,
  characters: null,
  selectedCharacter: null,
  episodes: null,
  selectedEpisode: null,
};
