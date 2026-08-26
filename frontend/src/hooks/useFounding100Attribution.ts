import { useEffect, useState } from "react";
import {
  getInitialFounding100Attribution,
  persistFounding100Attribution,
  removeAttributionFromVisibleUrl,
} from "../lib/founding100Funnel";

export function useFounding100Attribution() {
  const [attribution] = useState(getInitialFounding100Attribution);

  useEffect(() => {
    persistFounding100Attribution(attribution);
    removeAttributionFromVisibleUrl();
  }, [attribution]);

  return attribution;
}
