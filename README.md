# math-ext

## API

	clamp(1, 2, 3) // => 2
	clamp(1, 2, 0.5) // => 1
	clamp(1, 2, 1.5) // => 1.5

	lerp(0, 2, 0.75) // => 1.5

	var c = clamper(1, 2)
	c(4) // => 2
	c(0.2) // => 1

	var l = lerper(0, 10)
	l(0.5) // => 5

## Expose globally

	require('math-ext').expose();

	typeof Math.clamp // => "function"
	typeof Math.lerp // => "function"
	// you get the idea.

