import React from "react";
import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <section>
//       <h1>TopTap</h1>

//     </section>
//   );
// }

const Header = () => (
  <div>
    <h1>TopTap</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Survey">Survey</Link>
      </li>
      <li>
        <Link to="/Signup">Signup</Link>
      </li>
    </ul>
  </div>
);

export default Header;