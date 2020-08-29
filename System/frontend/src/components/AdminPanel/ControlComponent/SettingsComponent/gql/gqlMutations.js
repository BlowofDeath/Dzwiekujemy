import { gql } from "@apollo/client";

export const UPDATE_PAGE_SETTINGS = gql`
  mutation UpdatePageSettings($dayOfWeek: Int!, $online: Boolean!) {
    updatePageSettings(dayOfWeek: $dayOfWeek, online: $online) {
      dayOfWeek
      online
    }
  }
`;
