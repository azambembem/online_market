// import { configureStore } from "@reduxjs/toolkit";
// import auth from "./slice/auth";

// const store = configureStore({
//     reducer: {
//         auth,
//     },
// });

// export default store;
// export type RootStore = ReturnType<typeof store.getState>; // useSelector desak ->  tepadagi storedan getState qiliniyapti.
// export type AppDispatch = typeof store.dispatch; // useDispatch bn birxil ekan. aniqlashtirish kerak!!


// store.ts 파일
import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth"; // auth slice 불러오기

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;

// RootStore 정의 (Redux 상태 타입)
export type RootStore = ReturnType<typeof store.getState>;

// AppDispatch 정의 (dispatch 타입)
export type AppDispatch = typeof store.dispatch;
