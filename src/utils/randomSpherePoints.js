/**
 * Generates an array of random points within a sphere.
 *
 * @param {number} count - The number of points to generate.
 * @param {number} radius - The radius of the sphere.
 * @returns {Float32Array} An array containing the generated points. Each point is represented by three consecutive values (x, y, z).
 */
const randomSpherePoints = (count, radius) => {
	const points = new Float32Array(count * 3); // Each point has x, y, z

	for (let i = 0; i < count; i++) {
		let x, y, z, lengthSquared;
		do {
			x = (Math.random() * 2 - 1) * radius;
			y = (Math.random() * 2 - 1) * radius;
			z = (Math.random() * 2 - 1) * radius;
			lengthSquared = x * x + y * y + z * z;
		} while (lengthSquared > radius * radius); // Ensure the point is inside the sphere

		points[i * 3] = x;
		points[i * 3 + 1] = y;
		points[i * 3 + 2] = z;
	}

	return points;
};

export default randomSpherePoints;