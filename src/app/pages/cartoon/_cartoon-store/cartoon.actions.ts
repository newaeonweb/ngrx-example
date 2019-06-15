import { Action } from '@ngrx/store';
import { Character } from '../models/character';
import { CharacterHttp } from '../models/characterHttp';

export enum CharacterActionsType {
  GetAllCharacters = '[Character] Get All Characters',
  GetAllCharactersSuccess = '[Character] Get All Characters success',
  GetOneCharacter = '[Character] Get One Character',
  GetOneCharacterSuccess = '[Character] Get One Character Success',
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

export type CharacterActions =
  | GetAllCharacters
  | GetAllCharactersSuccess
  | GetOneCharacter
  | GetOneCharacterSuccess;
