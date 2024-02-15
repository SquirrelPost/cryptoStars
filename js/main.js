import './function.js';
// import {renderMap, /*resetMap*/} from './map/render-map.js';
import { provideUserData/*, provideContractorsData*/ } from './data/server-data.js';
import { onTypeButtonClick } from './utilities/set-activity.js';
import { renderListOfContractors } from './contractors/render-list.js';

// renderMap();
onTypeButtonClick();
provideUserData();
renderListOfContractors();
