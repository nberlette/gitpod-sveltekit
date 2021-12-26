import { sequence } from '@sveltejs/kit/hooks';

import { handle as userid } from './userid';
import { handle as minify } from './minify';

export const handle = sequence(userid, minify)