import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Optical Mouse" },
    { id: uuid(), name: "2TB External Hard Drive" },
    { id: uuid(), name: "1080p Monitor" },
    { id: uuid(), name: "RGB Lamp (USB)" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
