import { camelCase } from 'camel-case';
import { globby } from 'globby';
import P from 'path';
import { fileURLToPath } from 'url';

import fromPairs from './from-pairs.js';
import * as self from './index.js';
import map from './map.js';
import mapKeys from './map-keys.js';
import mapValues from './map-values.js';
import omit from './omit.js';
import stubObject from './stub-object.js';

const __dirname = P.dirname(fileURLToPath(import.meta.url));

export default {
  'all files': async () => {
    const filenames = await globby(['*', '!*.spec.js'], { cwd: __dirname });

    expect(
      filenames
        |> map(filename => [filename, {}])
        |> fromPairs
        |> omit(['index.js'])
        |> mapKeys(
          (empty, filename) => P.basename(filename, '.js') |> camelCase,
        ),
    ).toEqual(self |> mapValues(stubObject));
  },
};
