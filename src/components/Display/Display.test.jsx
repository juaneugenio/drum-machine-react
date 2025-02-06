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
import Display from "./Display";

describe("Display component", () => {
	beforeEach(() => {
		render(<Display />);
	});
	afterEach(() => {
		cleanup(); // Cleans up DOM after each test
	});

	describe("Display element", () => {
		// User Story #2
		it('should render a display element with id="display"', () => {
			const display = screen.getByTestId("display");

			expect(display).toBeInTheDocument();
			expect(display).toHaveAttribute("id", "display");
		});

		it("should show initial empty display content", () => {
			const display = screen.getByTestId("display");
			expect(display).toHaveTextContent("");
		});
	});
});
