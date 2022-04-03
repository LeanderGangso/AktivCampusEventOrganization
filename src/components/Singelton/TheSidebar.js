import logo from '../../images/logo.png';
import OutsideClickWrapper from "../OutsideClickWrapper";
import TheSidebarLinks from "./TheSidebarLinks";

const TheSidebar = ({ sidebarNav, isSidebarOpen, setOpenSidebar }) => {
	return (
		<div className='z-50'>
			<OutsideClickWrapper onOutsideClick={() => setOpenSidebar(false)}>
				<aside className={'bg-light w-60 h-screen shadow-md fixed top-0 duration-300 lg:relative lg:left-0 ' + (isSidebarOpen ? 'left-0' : '-left-60')}>
					<img src={logo} alt="logo" className="mx-auto w-40 py-6" />

					<div className='border-b border-border w-full mb-4'></div>

					<nav onClick={() => setOpenSidebar(false)}>
						{sidebarNav.map(link => (
							<TheSidebarLinks key={link.path} link={link} />
						))}
					</nav>
				</aside>
			</OutsideClickWrapper>
		</div>
	);
};

export default TheSidebar;