import { entity } from "simpler-state";

export const counterEntity = entity(0);

export const setCounterEntity = (val: number): void => {
  counterEntity.set(val);
};
