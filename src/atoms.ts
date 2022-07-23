import { atom } from "recoil";
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();

export const titleMessageAtom = atom<string>({
  key: 'titleMessage',
  default: "",
  effects_UNSTABLE: [persistAtom]
})
export const workChoiceAtom = atom<IWorkChoice>({
  key: 'workChoice',
  default: {
    logoOrCard: false,
    package: false,
    detailPage: false,
    videoEditing: false,
    product3D: false,
    posterLeaflet: false,
    landingPage: false,
    other: false,
  },
  effects_UNSTABLE: [persistAtom]
})
export const workDetailAtom = atom<IWorkDetail>({
  key: 'workDetail',
  default: {
    logo: false,
    nameCard: false,
    onlyDesign: false,
    designAndMake: false,
    poster: false,
    leaflet: false,
    designAndPublishing: false,
    requirePhoto: false,
    noRequirePhoto: false,
    within5minutes: false,
    within10minutes: false,
    within30minutes: false,
    within1hour: false,
    within2hours: false,
    basic: false,
    intermediate: false,
    advanced: false,
    other: false,
  },
  effects_UNSTABLE: [persistAtom]
})
export const purponseMessageAtom = atom<string>({
  key: 'purposeMessage',
  default: "",
  effects_UNSTABLE: [persistAtom]
})

export const keyWordListAtom = atom<string[]>({
  key: 'keyWordList',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const deadLineAtom = atom<string | undefined>({
  key: 'deadLine',
  default: "",
  effects_UNSTABLE: [persistAtom]
})
export const mainColorAtom = atom<IColor>({
  key: 'mainColor',
  default: {color: '', isClicked: false},
  effects_UNSTABLE: [persistAtom]
})
export const subColorsAtom = atom<IColor[]>({
  key: 'subColors',
  default: [
    {
      color: '',
      isClicked: false
    },
    {
      color: '',
      isClicked: false
    },
  ],
  effects_UNSTABLE: [persistAtom]
})
export const referenceContentsAtom = atom<IReferenceContents[]>({
  key: 'referece_contents',
  default: [
    {
      imgUrl: "",
      description: "",
    },
    {
      imgUrl: "",
      description: "",
    },
  ],
  effects_UNSTABLE: [persistAtom],
})
export const workspaceNumAtom = atom<number>({
  key: 'workspaceNum',
  default: 1,
  effects_UNSTABLE: [persistAtom]
})
export const requestMessageAtom = atom<string>({
  key: 'request_message',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
export const isDoneAtom = atom<boolean>({
  key: 'isDone',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
export const workStepAtom = atom<IWorkStep>({
  key: 'workStep',
  default: {
    titleStep: 'now',
    workChoiceStep: 'yet',
    detailStep: 'yet',
    purposeStep: 'yet',
    keyWordStep: 'yet',
    deadLineStep: 'yet',
    colorStep: 'yet',
    referenceStep: 'yet',
    etcStep: 'yet',
    additionStep: 'yet',
    submitStep: 'yet',
  },
  effects_UNSTABLE: [persistAtom],
})


export interface IColor {
  color: string;
  isClicked: boolean;
}

export interface IWorkChoice {
  logoOrCard: boolean;
  package: boolean;
  detailPage: boolean;
  videoEditing: boolean;
  product3D: boolean;
  posterLeaflet: boolean;
  landingPage: boolean;
  other: boolean;
}

export interface IWorkDetail {
  logo: boolean;
  nameCard: boolean;
  onlyDesign: boolean;
  designAndMake: boolean;
  poster: boolean;
  leaflet: boolean;
  designAndPublishing: boolean;
  requirePhoto: boolean;
  noRequirePhoto: boolean;
  within5minutes: boolean;
  within10minutes: boolean;
  within30minutes: boolean;
  within1hour: boolean;
  within2hours: boolean;
  basic: boolean;
  intermediate: boolean;
  advanced: boolean;
  other: boolean;
}

export interface IReferenceContents {
  imgUrl: string;
  description: string;
}

export type StepState = 'now' | 'done' | 'yet';

export interface IWorkStep {
  titleStep: StepState;
  workChoiceStep: StepState;
  detailStep: StepState;
  purposeStep: StepState;
  keyWordStep: StepState;
  deadLineStep: StepState;
  colorStep: StepState;
  referenceStep: StepState;
  etcStep: StepState;
  additionStep: StepState;
  submitStep: StepState;
}