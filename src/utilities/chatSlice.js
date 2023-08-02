import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isChatOpen: false,
    message: [],
  },
  reducers: {
    toggleChat: (state) => {
      state.isChatOpen = !state.isChatOpen;
    },
    addMessages: (state, action) => {
      if(state.message.length === 50){
        state.message.splice(40,10)
      }
      state.message.unshift(action.payload);
    },
  },
});

export const { toggleChat,addMessages } = chatSlice.actions;
export default chatSlice.reducer;
