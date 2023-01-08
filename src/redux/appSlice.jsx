import { createSlice } from "@reduxjs/toolkit";

const element = document.documentElement;
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const onWindowMatch = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && darkQuery.matches)
  ) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
};
onWindowMatch();
// auto detect theme change in os
darkQuery.addEventListener("change", (e) => {
  if(!("theme" in localStorage)){
    if(e.matches){
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }
})

export const cartSlice = createSlice({
  name: "app",
  initialState: {
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  },
  reducers: {
    addLight: (state) => {
      element.classList.remove("dark");
      state.theme = "light";
      localStorage.setItem("theme", "light");
    },
    addDark: (state) => {
      state.theme = "dark";
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    },
  },
});

export const {addLight, addDark} = cartSlice.actions;
export default cartSlice.reducer;
