import { GainType } from "~/enums/gain-type";

import type { LocaleGainType } from "../types/gain-type";

export const gainType = {
  values: {
    [GainType.Unknown_0]: `Unknown (${GainType.Unknown_0})`,
    [GainType.Unknown_1]: `Unknown (${GainType.Unknown_1})`,
    [GainType.Unknown_2]: `Unknown (${GainType.Unknown_2})`,
  },
  name: "Gain type",
} satisfies LocaleGainType;
