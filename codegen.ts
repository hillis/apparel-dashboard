
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://www.printavo.com/api/v2',
  documents: 'src/environments/*.graphql',
  generates: {
    './graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
  },
};

export default config;
