import { SAVE_COMMENT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [ action.payload, ...state ];
  }

  return state;
}