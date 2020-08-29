import { saveConfig, loadConfig } from "../utilities/configHandle";

const pageSettingsResolvers = {
  Query: {
    pageSettings: async (_, args, context) => {
      const config = await loadConfig("pageSettings");
      return config;
    },
  },
  Mutation: {
    updatePageSettings: async (_, { dayOfWeek, online }, context) => {
      const settings = {
        dayOfWeek: dayOfWeek,
        online: online,
      };
      saveConfig(settings, "pageSettings");
      return settings;
    },
  },
};

export default pageSettingsResolvers;
