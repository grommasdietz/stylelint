import { isValueFunction } from './typeGuards.mjs';

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {node is import('postcss-value-parser').FunctionNode}
 */
export default function isVarFunction(node) {
	return isValueFunction(node) && node.value.toLowerCase() === 'var';
}