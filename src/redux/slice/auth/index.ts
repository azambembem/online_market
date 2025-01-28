// import { createSlice } from "@reduxjs/toolkit";

// type State = "loading" | "error" | null;

// type InitialState = {
// 	sign_in: {
// 		number: string;
// 		state: State;
// 	};
// 	sign_up: {
// 		name: string;
// 		email: string;
// 		password: string;
// 		state: State;
// 	};
	
// 	state:"sign_in" | "sign-up";
// };

// const initialState: InitialState = {
// 	sign_in: {
// 		number: "",
// 		state: null,
// 	},
// 	sign_up: {
// 		name: "",
// 		email: "",
// 		password: "",
// 		state: null,
// 	},
	
// 	state: "sign_in",
// };

// const auth = createSlice({
// 	name: "auth",
// 	initialState,
// 	reducers: {
// 		setSignIn(
// 			state,
// 			{ payload }: { payload: Partial<InitialState["sign_in"]> }, // Partial nimaligini bilish kerak
// 		) {
// 			state.sign_in = { ...state.sign_in, ...payload };
// 		},
// 		setSignUp(
// 			state,
// 			{ payload }: { payload: Partial<InitialState["sign_up"]> },
// 		) {
// 			state.sign_up = { ...state.sign_up, ...payload };
// 		},
// 		setAuthState(state, { payload }: { payload: InitialState["state"] }) {
// 			state.state = payload;
// 		},
// 	},
// });

// export default auth.reducer;
// export const {setSignIn, setSignUp } = auth.actions;


// // slice/auth/index.ts
// import { createSlice } from "@reduxjs/toolkit";

// type State = "loading" | "error" | null;

// type InitialState = {
//   sign_in: {
//     state: State;
// 	number:string;
// 	password:string;
//   };
//   sign_up: {
//     state: State;
//   };
//   state: "sign-in" | "sign-up";
// };

// const initialState: InitialState = {
//   sign_in: { state: null, number: "", password: ""},
//   sign_up: { state: null },
//   state: "sign-in",
// };

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setSignIn(state, { payload }) {
//       state.sign_in = { ...state.sign_in, ...payload };
//     },
//     setSignUp(state, { payload }) {
//       state.sign_up = { ...state.sign_up, ...payload };
//     },
//     setAuthState(state, { payload }) {
//       state.state = payload;
//     },
//   },
// });

// export const { setSignIn, setSignUp, setAuthState } = auth.actions;
// export default auth.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type State = "loading" | "error" | null;

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
// };

// type InitialState = {
//   sign_in: {
//     state: State;
//     email: string;
//     password: string;
//   };
//   sign_up: {
//     state: State;
//     name: string;
//     email: string;
//     password: string;
//   };
//   // user: User | null; // Added user property
//   state: "sign-in" | "sign-up";
// };

// const initialState: InitialState = {
//   sign_in: { state: null, email: "", password: "" },
//   sign_up: { state: null, name: "", email: "", password: "" },
//   user: null, // Initialize user as null
//   state: "sign-in",
// };

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setSignIn(state, { payload }) {
//       state.sign_in = { ...state.sign_in, ...payload };
//     },
//     setSignUp(state, { payload }) {
//       state.sign_up = { ...state.sign_up, ...payload };
//     },
//     setAuthState(state, { payload }) {
//       state.state = payload;
//     },
//     setUser(state, { payload }: PayloadAction<User | null>) {
//       // Update the user property
//       state.user = payload;
//     },
    
//   },
// });

// export const { setSignIn, setSignUp, setAuthState, setUser} = auth.actions;
// export default auth.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type State = "loading" | "error" | null;

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
// };

// type InitialState = {
//   sign_in: {
//     state: State;
//     email: string;
//     password: string;
//   };
//   sign_up: {
//     state: State;
//     name: string;
//     email: string;
//     password: string;
//   };
//   user: User | null;
//   state: "sign-in" | "sign-up";
// };

// const initialState: InitialState = {
//   sign_in: { state: null, email: "", password: "" },
//   sign_up: { state: null, name: "", email: "", password: "" },
//   user: null, // Initialize user as null
//   state: "sign-in",
// };

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setSignIn(state, { payload }) {
//       state.sign_in = { ...state.sign_in, ...payload };
//     },
//     setSignUp(state, { payload }) {
//       state.sign_up = { ...state.sign_up, ...payload };
//     },
//     setAuthState(state, { payload }) {
//       state.state = payload;
//     },
//     setUser(state, { payload }: PayloadAction<User | null>) {
//       // Update the user property
//       state.user = payload;
//     },
//   },
// });

// export const { setSignIn, setSignUp, setAuthState, setUser } = auth.actions;
// export default auth.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = "loading" | "error" | null;

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type InitialState = {
  sign_in: {
    state: State;
    email: string;
    password: string;
  };
  sign_up: {
    state: State;
    name: string;
    email: string;
    password: string;
  };
  user: User | null;
  state: "sign-in" | "sign-up";
};

const initialState: InitialState = {
  sign_in: { state: null, email: "", password: "" },
  sign_up: { state: null, name: "", email: "", password: "" },
  user: null,
  state: "sign-in",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn(state, { payload }) {
      state.sign_in = { ...state.sign_in, ...payload };
    },
    setSignUp(state, { payload }) {
      state.sign_up = { ...state.sign_up, ...payload };
    },
    setAuthState(state, { payload }) {
      state.state = payload;
    },
    setUser(state, { payload }: PayloadAction<User | null>) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
      state.sign_in = initialState.sign_in;
      state.sign_up = initialState.sign_up;
      state.state = "sign-in";
    },
  },
});

export const { setSignIn, setSignUp, setAuthState, setUser, logout } = auth.actions;
export default auth.reducer;