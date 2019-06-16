import { CharacterActionsType, CharacterActions } from './cartoon.actions';
import { CartoonState, initialCartoonState } from './cartoon.state';

export const cartoonReducers = (
  state = initialCartoonState,
  action: CharacterActions
): CartoonState => {
  switch (action.type) {
    case CharacterActionsType.GetAllCharactersSuccess: {
      return {
        ...state,
        info: action.payload.info,
        characters: action.payload.results,
      };
    }

    case CharacterActionsType.GetOneCharacterSuccess: {
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    }

    // Episode reducers

    case CharacterActionsType.GetAllEpisodesSuccess: {
      return {
        ...state,
        info: action.payload.info,
        episodes: action.payload.results,
      };
    }

    case CharacterActionsType.GetOneEpisodeSuccess: {
      return {
        ...state,
        selectedEpisode: action.payload,
      };
    }

    default:
      return state;
  }
};
