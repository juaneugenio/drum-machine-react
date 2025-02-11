/** @format */

import DrumMachine from "./components/DrumMachine/DrumMachine";
import "./App.scss";

function App() {
	return (
		<div className="app-container">
			<main className="main-content">
				<DrumMachine />
			</main>
			<footer className="footer">
				<p>
					&copy; {new Date().getFullYear()} Drum Machine Project. Made by{" "}
					<a 
						href="https://eugenioportfolio.netlify.app/" 
						target="_blank" 
						rel="noopener noreferrer"
						className="footer-link"
					>
						Juan C. Eugenio
					</a>{" "}
					Web Developer.
				</p>
			</footer>
		</div>
	);
}

export default App;
