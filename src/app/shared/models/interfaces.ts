export enum ColorBorder {
  blue = 'blue',
  green = 'green',
  yellow = 'yellow',
  red = 'red',
}
export type ColorBorderCard = 'blue' | 'green' | 'yellow' | 'red' | undefined;

export interface AdminCard {
  title: string,
  discription: string,
  img: string,
  linkVideo: string,
  datePublic: string,
  id: string,
}
