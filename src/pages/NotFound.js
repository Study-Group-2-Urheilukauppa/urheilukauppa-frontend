import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div className="m-0 p-0 font-mono max-h-screen">
            <form className=" w-full absolute top-1/4 text-center text-primary">
                <h2 className=" mb-3 text-2xl ">Hupsis! Sivua ei löytynyt 😔</h2>
                <h1 className=" pb-4 text-9xl m-0 font-extrabold tracking-widest">404</h1>
                <p className="mb-4 pb-7">Emme löytäneet etsimääsi sivua.</p>
                <Link to='/' className=' bg-secondary text-[#fff] pt-2 pl-3 pb-2 pr-3 inline-block border-primary border-2 rounded-3xl hover:bg-fourth '>
                    Tästä takasin etusivulle</Link>
            </form>
        </div>
    )
}