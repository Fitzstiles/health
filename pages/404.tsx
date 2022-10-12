import Link from "next/link";

const NotFound = () => {
    return (
        <div className="not__found">
            <h1>Oops</h1>
            <h2>Cant find this page</h2>
            <p>please go back to <Link href='/'> Home</Link></p>
        </div>
    );
}

export default NotFound;