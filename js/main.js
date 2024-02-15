import './function.js';
// import {renderMap, /*resetMap*/} from './map/render-map.js';
import { provideUserData/*, provideContractorsData*/ } from './data/server-data.js';
import { renderListOfContractors } from './contractors/render-data.js';
import { onTypeButtonClick } from './utilities/set-activity.js';

// renderMap();
onTypeButtonClick();
provideUserData();
renderListOfContractors();
