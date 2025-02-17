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

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrumPad from "./DrumPad";
import userEvent from "@testing-library/user-event";

// Mock data for all tests
const mockPad = {
	key: "Q",
	id: "Heater-1",
	audio: "Heater 1.mp3",
};

describe("Drum Pad component", () => {
	const mockOnClick = vi.fn();
	// Setup and teardown
	beforeEach(() => {
		// We pass the mockPad to simulate the props drilling
		render(<DrumPad pad={mockPad} onPadClick={mockOnClick} />);
		window.HTMLAudioElement.prototype.play = vi.fn();
	});
	afterEach(() => {
		cleanup();
		vi.clearAllMocks();
	});

	// User Story #3 & #4 Tests
	describe("Basic Rendering (User Story #3)", () => {
		it('should have className="drum-pad"', () => {
			const padElement = screen.getByRole("button");
			expect(padElement).toHaveClass("drum-pad");
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
	// User Stories #5 & #6
	describe("Interaction Tests (User Stories #5, #6, #7)", () => {
		it("should trigger audion on click (User Story #5)", async () => {
			const user = userEvent.setup();
			const padElement = screen.getByRole("button");
			const audioElement = screen.getByRole("audio");

			await user.click(padElement);

			expect(audioElement.play).toHaveBeenCalled();
			expect(mockOnClick).toHaveBeenCalledWith(mockPad.id);
		});
		it("should trigger audio on keyboard press (User Story #6)", async () => {
			const audioElement = screen.getByRole("audio");
			fireEvent.keyDown(document, { key: mockPad.key });
			expect(audioElement.play).toHaveBeenCalled();
			expect(mockOnClick).toHaveBeenCalledWith(mockPad.id);
		});

		it("should reset audio before playing", async () => {
			const user = userEvent.setup();
			const padElement = screen.getByRole("button");
			const audioElement = screen.getByRole("audio");

			audioElement.currentTime = 10;
			await user.click(padElement);

			expect(audioElement.currentTime).toBe(0);
			expect(audioElement.play).toHaveBeenCalled();
		});

		it("should handle incorrect key press", () => {
			const audioElement = screen.getByRole("audio");
			fireEvent.keyDown(document, { key: "Y" }); // Incorrect key
			expect(audioElement.play).not.toHaveBeenCalled();
		});

		it("should handle active state on trigger", async () => {
			const user = userEvent.setup();
			const padElement = screen.getByRole("button");
			
			await user.click(padElement);
			expect(padElement).toHaveClass("active");
			
			// To check if the active class is removed after the transition
			await new Promise(resolve => setTimeout(resolve, 150));
			expect(padElement).not.toHaveClass("active");
		});
	});
});
