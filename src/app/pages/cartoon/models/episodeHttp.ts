import { Info } from './info';
import { Episode } from './episode';

export interface EpisodeHttp {
  info: Info;
  results: Episode[];
}
