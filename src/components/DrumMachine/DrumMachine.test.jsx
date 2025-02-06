/** @format */

/**
 * DrumMachine Component Test Suite
 * Tests User Stories #1 and #2:
 * - Drum machine container rendering
 * - Display element functionality
 * @testing-library/react
 */

import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrumMachine from "./DrumMachine";

describe("DrumMachine component", () => {
	beforeEach(() => {
		render(<DrumMachine />);
	});
	afterEach(() => {
		cleanup(); // Cleans up DOM after each test
	});

	describe("Container Structure", () => {
		// User Story #1
		it('should render drum machine container with id="drum-machine"', () => {
			const container = screen.getByTestId("drum-machine");

			expect(container).toBeInTheDocument();
			expect(container).toHaveAttribute("id", "drum-machine");
		});
	});

});
