const predefinedColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F4D03F"];

function getBackgroundColor(index) {
	return predefinedColors[index % predefinedColors.length]; // Ensures looping
}
export default getBackgroundColor;