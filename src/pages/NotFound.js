import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div className="m-0 p-0 max-h-screen">
            <form className=" w-full absolute top-1/4 text-center text-primary">
                <h2 className=" mb-3 text-2xl ">Hupsis! Sivua ei löytynyt 😔</h2>
                <h1 className=" pb-4 text-9xl m-0 font-extrabold tracking-widest">404</h1>
                <p className="mb-4 pb-7">Emme löytäneet etsimääsi sivua.</p>
                <Link to='/' className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl">
                    Tästä takasin etusivulle</Link>
            </form>
        </div>
    )
}