/** @format */
// describe("Drum Pads (User Story #3)", () => {
//   it("should render 9 drum pads with correct class names")
//   it("should have unique ids for each pad")
//   it("should display correct key text in order")
//   it("should be clickable elements")
// })

// Basic Rendering Tests

// Audio element exists
// Correct audio source
// Proper class name "clip"
// Interaction Tests

// Click functionality
// Keyboard accessibility

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrumPad from "./DrumPad";

// Mock data for all tests
const mockPad = {
	key: "Q",
	id: "Heater-1",
	audio: "Heater 1.mp3",
};

describe("Drum Pad component", () => {
	// Setup and teardown
	beforeEach(() => {
		// We pass the mockPad to simulate the props drilling
		render(<DrumPad pad={mockPad} />);
	});
	afterEach(() => {
		cleanup();
	});

	// User Story #3 & #4 Tests
	describe("Basic Rendering (User Story #3)", () => {
		it('should have className="drum-pad"', () => {
			const padEllement = screen.getByRole("button");
			expect(padEllement).toHaveClass("drum-pad");
		});

		it("should have proper ID attribute", () => {
			const padElement = screen.getByRole("button");
			expect(padElement).toHaveAttribute("id", mockPad.id);
		});

		it("should display correct key text", () => {
			const padElement = screen.getByRole("button");
			expect(padElement).toHaveTextContent(mockPad.key);
		});

		it("should have proper ARIA attributes", () => {
			const padElement = screen.getByRole("button");
			expect(padElement).toHaveAttribute("tabIndex", "0");
			expect(padElement).toHaveAttribute("aria-label", `Drum pad ${mockPad.key}`);
		});
	});

	describe("Audio Element (User Story #4)", () => {
		it("should render audio element", () => {
			const audioElement = screen.getByRole("audio");
			expect(audioElement).toBeInTheDocument();
		});

		it("should have correct audio source", () => {
			const audioElement = screen.getByRole("audio");
			const expectedAudioPath = `/src/assets/sounds/${mockPad.audio}`;

			expect(audioElement).toHaveAttribute("src", expectedAudioPath);
		});
		// Require for story #4
		it('should have class name "clip"', () => {
			const audioElement = screen.getByRole("audio");
			expect(audioElement).toHaveClass("clip");
		});
	});

  describe("Interaction Tests (Future Stories)", () => {
		it("should handle click events");
		it("should handle keyboard events");
	});

});
