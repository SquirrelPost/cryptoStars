import {renderMap} from './map/render-map.js';
import { provideUserData } from './data/server-data.js';
import { onTypeButtonClick, onViewButtonClick } from './utilities/set-activity.js';
import { renderListOfContractors } from './contractors/render-list.js';

const initProject = () => {
  onTypeButtonClick();
  onViewButtonClick();
  provideUserData();
  renderMap();
  renderListOfContractors();
};

initProject();
