import { emptyFieldGenerator, CellState, fieldGenerator } from './Field';

const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
  describe('emptyFieldGenerator tests', () => {
    it('2x2', () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it('3x3', () => {
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });
  describe('Simple cases', () => {
    it('wrong density', () => {
      const errorText = 'Density must be between 0 and 1';
      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });
    it('Smallest possible field without mine', () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });
    it('Big possible field without mine', () => {
      expect(fieldGenerator(10, 0)).toStrictEqual([
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ]);
    });
    it('Smallest possible field with mine', () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });
    it('2x2 field with mines', () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ]);
    });
    it('2x2 field 50% density', () => {
      const field = fieldGenerator(2, 0.5)
      const flatField = field.flat()

      const cellsWithBombs = flatField.filter((cell) => cell === bomb)
      const emptyCells = flatField.filter((cell) => cell === empty)
      
      expect(cellsWithBombs).toHaveLength(2)
      expect(emptyCells).toHaveLength(2)
    });
  });
});
