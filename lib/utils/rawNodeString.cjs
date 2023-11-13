// NOTICE: This file is generated by Rollup. To modify it,
// please instead edit the ESM counterpart and rebuild with Rollup (npm run build).
'use strict';

/**
 * Stringify PostCSS node including its raw "before" string.
 *
 * @param {import('postcss').Node} node
 *
 * @returns {string}
 */
function rawNodeString(node) {
	let result = '';

	if (node.raws.before) {
		result += node.raws.before;
	}

	result += node.toString();

	return result;
}

module.exports = rawNodeString;