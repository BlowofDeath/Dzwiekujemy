import { gql } from "apollo-server-express";

const pageSettingsType = gql`
  type Query {
    pageSettings: PageSettings!
  }

  type PageSettings {
    dayOfWeek: String!
    online: Boolean!
  }

  type Mutation {
    updatePageSettings(dayOfWeek: String!, online: Boolean!): PageSettings
  }
`;

export default pageSettingsType;
