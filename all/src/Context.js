import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      id: 1,
      image: "images/t1.jpg",
      name: "timmylee",

      phone: "09045339820",
    },
    {
      id: 2,
      image: "images/t2.jpg",
      name: "okoduwa",

      phone: "09045339820",
    },
    {
      id: 3,
      image: "images/feranmi.jpg",
      name: "osagie",

      phone: "09045339820",
    },
  ],
  friend: [],
  business: [],
  family: [],
  private: [],
};

const Context = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contact.push({ ...payload });
    },
    addFriend: (state, { payload }) => {
      const checkContact = state.friend.findIndex((el) => el.id === payload.id);
      if (checkContact >= 0) {
        state.friend[checkContact].QTY += 1;
      } else {
        state.friend.push({ ...payload, QTY: 1 });
      }
    },
    addFamily: (state, { payload }) => {
      const checkContact = state.family.findIndex((el) => el.id === payload.id);
      if (checkContact >= 0) {
        state.family[checkContact].QTY += 1;
      } else {
        state.family.push({ ...payload, QTY: 1 });
      }
    },
    addPrivate: (state, { payload }) => {
      const checkContact = state.private.findIndex(
        (el) => el.id === payload.id
      );
      if (checkContact >= 0) {
        state.private[checkContact].QTY += 1;
      } else {
        state.private.push({ ...payload, QTY: 1 });
      }
    },
    addBusines: (state, { payload }) => {
      const checkContact = state.business.findIndex(
        (el) => el.id === payload.id
      );
      if (checkContact >= 0) {
        state.business[checkContact].QTY += 1;
      } else {
        state.business.push({ ...payload, QTY: 1 });
      }
    },
    removeBusiness: (state, { payload }) => {
      state.business = state.business.filter((el) => el.id !== payload.id);
    },
    removeFriend: (state, { payload }) => {
      state.friend = state.friend.filter((el) => el.id !== payload.id);
    },
    removeFamily: (state, { payload }) => {
      state.family = state.family.filter((el) => el.id !== payload.id);
    },
    removePrivate: (state, { payload }) => {
      state.private = state.private.filter((el) => el.id !== payload.id);
    },
  },
});

export const {
  addContact,
  addPrivate,
  addFriend,
  addBusines,
  removeFriend,
  addFamily,
  removeFamily,
  removeBusiness,
  removePrivate,
} = Context.actions;
export default Context.reducer;
