import { AuroSkeleton } from './src/auro-skeleton.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-skeleton', AuroSkeleton);
