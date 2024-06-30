import { useEffect, useState } from 'react'
import Theme from '../assets/images/theme.png'

function getInitialTheme() {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		return savedTheme === 'dark'; 
	}

	// Check the user's system theme
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		return false
	}

	// If the user's system theme is dark or the user has no preference, return true
	return true
}

const ThemeSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => getInitialTheme())

	function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
		setIsDarkMode(e.target.checked)
	}

	useEffect(() => {
		const theme = isDarkMode ? 'dark' : 'light'
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [isDarkMode])

	return (
		<div className="theme-switch">
			<label className="switch">
				<input
					type="checkbox"
					checked={isDarkMode}
					onChange={(e) => handleThemeChange(e)}
				/>
				<span className="slider"></span>
			</label>

			
			<img src={Theme} alt="theme switch" className={`${isDarkMode ? 'dark-mode' : ''}`} />
		</div>
	)
}

export default ThemeSwitch