import { DateTime } from "./luxon.js";
import { timeData } from "./field-data.js";

class Displaytime {
  getTimeData() {
    const dateTime = DateTime.now().toLocaleString(
      DateTime.DATETIME_HUGE_WITH_SECONDS
    );
    const p = document.createElement("p");
    p.innerText = dateTime;
    timeData.appendChild(p);
  }
}
export default Displaytime;
