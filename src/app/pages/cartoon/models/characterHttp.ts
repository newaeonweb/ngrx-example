import { Character } from './character';
import { Info } from './info';

export interface CharacterHttp {
  info: Info;
  results: Character[];
}
