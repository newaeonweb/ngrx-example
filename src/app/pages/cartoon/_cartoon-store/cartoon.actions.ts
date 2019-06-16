import { Action } from '@ngrx/store';
import { Character } from '../models/character';
import { CharacterHttp } from '../models/characterHttp';
import { Episode } from '../models/episode';
import { EpisodeHttp } from '../models/episodeHttp';

export enum CharacterActionsType {
  GetAllCharacters = '[Character] Get All Characters',
  GetAllCharactersSuccess = '[Character] Get All Characters success',
  GetOneCharacter = '[Character] Get One Character',
  GetOneCharacterSuccess = '[Character] Get One Character Success',
  GetAllEpisodes = '[Episode] Get All Episodes',
  GetAllEpisodesSuccess = '[Episode] Get All Episodes success',
  GetOneEpisode = '[Episode] Get One Episode',
  GetOneEpisodeSuccess = '[Episode] Get One Episode Success',
}

export class GetAllCharacters implements Action {
  public readonly type = CharacterActionsType.GetAllCharacters;
}

export class GetAllCharactersSuccess implements Action {
  public readonly type = CharacterActionsType.GetAllCharactersSuccess;
  constructor(public payload: CharacterHttp) {}
}

export class GetOneCharacter implements Action {
  public readonly type = CharacterActionsType.GetOneCharacter;
  constructor(public payload: number) {}
}

export class GetOneCharacterSuccess implements Action {
  public readonly type = CharacterActionsType.GetOneCharacterSuccess;
  constructor(public payload: Character) {}
}

//  Episode Actions

export class GetAllEpisodes implements Action {
  public readonly type = CharacterActionsType.GetAllEpisodes;
}

export class GetAllEpisodesSuccess implements Action {
  public readonly type = CharacterActionsType.GetAllEpisodesSuccess;
  constructor(public payload: EpisodeHttp) {}
}

export class GetOneEpisode implements Action {
  public readonly type = CharacterActionsType.GetOneEpisode;
  constructor(public payload: number) {}
}

export class GetOneEpisodeSuccess implements Action {
  public readonly type = CharacterActionsType.GetOneEpisodeSuccess;
  constructor(public payload: Episode) {}
}

export type CharacterActions =
  | GetAllCharacters
  | GetAllCharactersSuccess
  | GetOneCharacter
  | GetOneCharacterSuccess
  | GetAllEpisodes
  | GetAllEpisodesSuccess
  | GetOneEpisode
  | GetOneEpisodeSuccess;
