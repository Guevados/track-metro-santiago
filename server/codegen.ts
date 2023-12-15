import type {CodegenConfig} from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./utils/context#DataSourceContext",
        mappers: {
          busStop: "./models#BusStopModel"
        },
      },
    },
  },
};

export default config;