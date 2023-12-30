import {css} from 'styled-components'

export const generateNthChildStyles = () => {
  const styles = [];
  const colorsMap: Map<number, string> = new Map([
    [1, '#f2f2f2'],
    [2, '#e0e0e0'],
    [5, '#e0e0e0'],
    [3, '#d3d3d3'],
    [6, '#d3d3d3'],
    [9, '#d3d3d3'],
    [4, '#c1c1c1'],
    [7, '#c1c1c1'],
    [10, '#c1c1c1'],
    [8, '#b8b8b8'],
    [11, '#b8b8b8'],
    [13, '#b8b8b8'],
    [12, '#9a9a9a'],
    [14, '#a9a9a9']
  ]);

  for (let [key, value] of Array.from(colorsMap.entries())) {
    styles.push(css`
    &:nth-child(${key}) {
      background-color: ${value};
    }
  `);
  }

  return styles;
};
