import { gql } from "apollo-server-express";

const pageSettingsType = gql`
  type Query {
    pageSettings: PageSettings!
  }

  type PageSettings {
    dayOfWeek: Int!
    online: Boolean!
  }

  type Mutation {
    updatePageSettings(dayOfWeek: Int!, online: Boolean!): PageSettings
  }
`;

export default pageSettingsType;
