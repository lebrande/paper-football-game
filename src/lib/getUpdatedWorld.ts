export const getUpdatedWorld = (
  world: number[][],
  pointToUpdate: [number, number],
  direction: number,
): number[][] => {
  return world.map((row, index) => {
    if (index === pointToUpdate[1]) {
      return row.map((point, index) => {
        if (
          index === pointToUpdate[0]
          && !(point & direction)
        ) {
          return point + direction;
        }

        return point;
      });
    }

    return row;
  })
}