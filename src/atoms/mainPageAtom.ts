import { atom } from 'recoil';

export const menuToggleState = atom<boolean>({
  key: 'menuToggleState',
  default: false,
})