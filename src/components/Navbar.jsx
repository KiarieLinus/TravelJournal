import logo from "../assets/globe.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className='nav--logo' />
            <p>my travel journal.</p>
        </nav>
    )
}