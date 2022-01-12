import { entity } from "simpler-state";

export const blocEntity = entity(0);

export const setBlocEntity = (val: number): void => {
  blocEntity.set(val);
};
