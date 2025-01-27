// import Navbar from "./components/navbar";
// import { Toaster } from "@/components/ui/sonner";
// import Footer from "./components/footer";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { route } from "./utils/route";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

// function App() {
//   const isAuthenticated = useIsAuthenticated();
//   return (
//     <div>
//       <Navbar />
//       <Toaster />
//       <Routes>
//         {route.map(({ id, isPrivate = false, ...configs }) =>
//           isPrivate ? (
//             <Route
//               key={id}
//               {...configs}
//               element={isAuthenticated ? configs.element : <Navigate to="/" />}
//             />
//           ) : (
//             <Route key={id} {...configs} />
//           )
//         )}
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./components/footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { route } from "./utils/route";
import { useReduxSelector } from "@/hooks/useRedux";

function App() {
  const user = useReduxSelector((state) => state.auth.user);

  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        {route.map(({ id, isPrivate = false, ...configs }) =>
          isPrivate ? (
            <Route
              key={id}
              {...configs}
              element={user ? configs.element : <Navigate to="/sign-in" />}
            />
          ) : (
            <Route key={id} {...configs} />
          )
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
