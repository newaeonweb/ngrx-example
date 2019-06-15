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
        characters: action.payload.results,
      };
    }

    case CharacterActionsType.GetOneCharacterSuccess: {
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    }

    default:
      return state;
  }
};
