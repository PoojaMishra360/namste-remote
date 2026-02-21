import { createContext } from "react";
// craete a context and default value  and access for all the components
const UserContext = createContext({
  user: {
    name: "Pooja",
    email: "mishrapooja881@gamial.com"
  }
  });


export default UserContext;