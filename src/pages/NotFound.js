import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div className="grid place-items-center h-screen text-3xl">
            404 Page not found.
           <Link to='/' className=' border-2 bg-secondary'>Tästä takasin etusivulle</Link>
        </div>
    )
}