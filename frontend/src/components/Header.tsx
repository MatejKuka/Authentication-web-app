import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={"mb-14 mt-4"}>
            <Link className={"text-4xl mx-2 underline"} to="/sign-up">Sign Up</Link>
            <Link className={"text-4xl mx-2 underline"} to="/sign-in">Sign In</Link>
            <Link className={"text-4xl mx-2 underline"} to="/sign-out">Sign Out</Link>
            <Link className={"text-4xl mx-2 underline"} to="/user-profile">User Profile</Link>
        </div>
    );
}

export default Header;