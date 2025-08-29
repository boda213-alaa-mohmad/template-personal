import './header.css'

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h2>Personal Shape</h2>
            </div>
            <ul className='listItem'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portofilo</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className='mobile-toggle' id='mobileToggle'>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
        </header>
    );
}