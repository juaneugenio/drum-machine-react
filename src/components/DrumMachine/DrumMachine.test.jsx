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
import { DRUM_PADS } from "../../utils/constants";

describe("DrumMachine component", () => {
	beforeEach(() => {
		render(<DrumMachine />);
	});
	afterEach(() => {
		cleanup(); // Cleans up DOM after each test
	});

	describe("Container Structure (User Story #1)", () => {
		// User Story #1
		it('should render drum machine container with id="drum-machine"', () => {
			const container = screen.getByTestId("drum-machine");

			expect(container).toBeInTheDocument();
			expect(container).toHaveAttribute("id", "drum-machine");
		});
	});

	describe("pad container structure (User Story #3)", () => {
		it("should render Pad Container", () => {
			const container = screen.getByTestId("pad-container");
			expect(container).toBeInTheDocument();
		});
		it("should render exactly 9 drum pads", () => {
			const pads = screen.getAllByRole("button");
			expect(pads).toHaveLength(9);
		});
		it("should maintain correct pad order", () => {
			const pads = screen.getAllByRole("button");
			const padKeys = pads.map((pad) => pad.textContent);
			const expectedOrder = DRUM_PADS.map((pad) => pad.key);

			expect(padKeys).toEqual(expectedOrder);
		});
	});
});
