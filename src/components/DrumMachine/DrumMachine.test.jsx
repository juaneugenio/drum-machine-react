/** @format */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrumMachine from "./DrumMachine";
import { beforeEach } from "vitest";

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

	describe("Display element", () => {
		// User Story #2
		it('should render a display element with id="display"', () => {
			const display = screen.getByTestId("display");

			expect(display).toBeInTheDocument();
			expect(display).toHaveAttribute("id", "display");
		});

    it('should show initial empty display content',(  ) => {
       const display = screen.getByTestId('display');
       expect(display).toHaveTextContent("")
    }
    )
	});
});
