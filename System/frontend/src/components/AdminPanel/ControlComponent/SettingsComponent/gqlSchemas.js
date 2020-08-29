import { gql } from "@apollo/client";

export const PAGE_SETTINGS = gql`
  query PageSettings {
    pageSettings {
      dayOfWeek
      online
    }
  }
`;
