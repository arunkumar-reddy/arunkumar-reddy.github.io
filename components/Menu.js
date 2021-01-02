import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                <li><Link href="/projects"><a><span onClick={props.onToggleMenu}>Projects</span></a></Link></li>
                <li><Link href="/skills"><a><span onClick={props.onToggleMenu}>Skills</span></a></Link></li>
                <li><Link href="/interests"><a><span onClick={props.onToggleMenu}>Interests</span></a></Link></li>
                <li><Link href="/blog"><a><span onClick={props.onToggleMenu}>Blog</span></a></Link></li>
                <li><Link href="/publications"><a><span onClick={props.onToggleMenu}>Publications</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/" className="button special fit">Get Started</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
