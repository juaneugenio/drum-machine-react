/** @format */
// describe("Drum Pads (User Story #3)", () => {
//   it("should render 9 drum pads with correct class names")
//   it("should have unique ids for each pad")
//   it("should display correct key text in order")
//   it("should be clickable elements")
// })

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrumPad from "./DrumPad";

describe("Drum Pad component", () => {
	beforeEach(() => {
		render(<DrumPad />);
	});
	afterEach(() => {
		cleanup();
	});
	//  User story 3
	it('should containe an element with id="drumpad-container"', () => {
		const display = screen.getByTestId("drumpad-container");
    expect(display).toBeInTheDocument()
	});

  it('should display empty content initially', () => {
		const display = screen.getByTestId("drumpad-container");
		expect(display).toHaveTextContent("");
	});
});
