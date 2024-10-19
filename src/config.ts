type EnvConfigVariables =
  | "MONGODB_URI"
  | "SENDGRID_API_KEY"
  | "MODULES_CONFLICT_EMAIL_TO"
  | "MODULES_CONFLICT_EMAIL_CC";

function getConfigValue(key: EnvConfigVariables) {
  const value = process.env[key];

  if (!value) {
    throw new Error(
      `Please define the ${key} environment variable inside .env.local`,
    );
  }

  return value;
}

export type MongoDbConfig = {
  uri: string;
};

export type SendgridConfig = {
  apiKey: string;
};

export type ConflictModuleConfig = {
  email: {
    to: string;
    cc: string;
  };
};

export type ModulesConfig = {
  conflict: ConflictModuleConfig;
};

export type Config = {
  mongoDb: MongoDbConfig;
  sendgrid: SendgridConfig;
  modules: ModulesConfig;
};

export const config: Config = {
  mongoDb: {
    uri: getConfigValue("MONGODB_URI"),
  },
  sendgrid: {
    apiKey: getConfigValue("SENDGRID_API_KEY"),
  },
  modules: {
    conflict: {
      email: {
        to: getConfigValue("MODULES_CONFLICT_EMAIL_TO"),
        cc: getConfigValue("MODULES_CONFLICT_EMAIL_CC"),
      },
    },
  },
};
