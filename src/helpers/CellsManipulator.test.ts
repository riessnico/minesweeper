import { incrementNeighbours } from "./CellsManipulator"
import { CellState } from './Field'

const {empty, bomb} = CellState

describe('Check increment neighbours', () => { 
	describe('simple cases', () => {
		it('field with only one item', () => {
			expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]])
		})
		it('filed 2x2 with one mine', () => {
			expect(incrementNeighbours([0,0], [[bomb,empty], [empty, empty]])).toStrictEqual([[bomb, 1], [1,1]])
		})
	})
 })