import { DateTime } from './luxon.js';
import { timeData } from './field-data.js';

class Displaytime {
  getTimeData() {
    const dateTime = DateTime.now().toFormat('MMMM dd, yyyy hh:mm:ss');
    const p = document.createElement('p');
    p.innerText = dateTime;
    timeData.appendChild(p);
  }
}
export default Displaytime;
